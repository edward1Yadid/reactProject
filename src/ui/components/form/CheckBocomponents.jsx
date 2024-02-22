import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { bool, func, string } from 'prop-types';
import useCustomf from '../../../core/hooks/form/useCustomf';
import initialSignUpform from '../../../core/services/form/initialSignUpform';
import joischemasignup from '../../../core/services/form/joischemasignup';

const CheckBocomponents = () => {
  const { value: { datafromApi }, ...rest } = useCustomf(initialSignUpform, joischemasignup);

  const [isChecked, setIsChecked] = useState(datafromApi.isBusiness); // Initialize with existing value

  const handleChange = (e) => {
    setIsChecked((prevChecked) => !prevChecked);
    rest.setdatafromApi({
      ...datafromApi,
      isBusiness: isChecked,
    });
    console.log(isChecked); // Log the updated value
    console.log(datafromApi)
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={isChecked} onClick={handleChange} color="primary" />}
      label="Signup as business"
      {...rest}
    />
  );
};

CheckBocomponents.propTypes = {
  checked: bool,
  onChange: func,
  text: string,
};

export default CheckBocomponents;
