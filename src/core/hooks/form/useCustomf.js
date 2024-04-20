import Joi from "joi";
import { func, object } from "prop-types";
import {
    useCallback,
    useMemo,
    useState
} from "react";
import { useInterceptors } from "../../services/axios/useInterceptors";

const useCustomf = (initialForm, schema, handleonSubmit) => {
const [datafromApi,setdatafromApi]=useState(initialForm)
const [errorsFromApi,seterrorsFromApi]=useState({})

//check the validation of the input 
const validationPropretyOfInput=useCallback((nameOffiled,valueOffiled)=>{
const objectFiled={[nameOffiled]:valueOffiled}//יצרת תבנית לבדיקת שדה
const genSchema=Joi.object({[nameOffiled]: schema[nameOffiled]})//השוואת השדה לסכימה שנקבעה
const {error}=genSchema.validate(objectFiled)//ביצוע ולידציה על ההשואה וחילוץ השגיאה במידה ויש
return error ? error.details[0].message: null // החזרת השגיאה במידה ויש 

},[schema])

useInterceptors()

const onchangeCheckValid = useCallback((e) => {

    const target = e.target;
    const {name, value} = target;
    const errorMessage = validationPropretyOfInput(name, value);
    if (errorMessage) seterrorsFromApi(prev => ({...prev, [name]: errorMessage}));
    else seterrorsFromApi(prev =>
        {
            const obj = {...prev};
            delete obj[name];
            return obj;
        });
        setdatafromApi(prev => ({...prev, [name]: value}));
},[validationPropretyOfInput]);


//check all form validate 

const formValidate=useCallback(()=>{
    const schemaValidate=Joi.object(schema)
    const {error}=schemaValidate.validate(datafromApi)///בדיקה מול כל הדאטה הקיימת בסטייט
    if(error) return error;
    return null; 

},[schema,datafromApi])


//when i want to reset the data 
const resetDataFromForm= useCallback(()=>{
    setdatafromApi(initialForm)
    seterrorsFromApi({})
    
},[initialForm])

const handleonSubmitFun=useCallback(()=>{
    handleonSubmit(datafromApi)///פונקציה שנבנית על הדאטה שנשלחת 

},[datafromApi,handleonSubmit])


const value =useMemo(()=>{
    return {datafromApi,errorsFromApi}
},[datafromApi,errorsFromApi])



return {
    validationPropretyOfInput,resetDataFromForm,onchangeCheckValid,formValidate,handleonSubmitFun,value,setdatafromApi

}
}

useCustomf.propTypes={
   initialForm:object.isRequired,
   schema:object.isRequired,
   handleonSubmit:func.isRequired

}
   export default useCustomf