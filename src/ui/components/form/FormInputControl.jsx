import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Typography, Grid, Container } from '@mui/material';
import ButtonsForm from './ButtonsForm';
import LoopIcon from '@mui/icons-material/Loop';
import { bool, func, node, number, string } from 'prop-types';

import useCustomf from '../../../core/hooks/form/useCustomf';

const FormInputControl = ({
    title,
    handleSubmit,
    handleReset,
    onChange,
    to,
    children
    ,styles
}) => {
    const navigate = useNavigate();
const {formValidate}=useCustomf()
    return (
        <Container
            component="form"
            sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}
            onSubmit={handleSubmit}
            autoComplete='off'
            noValidate//אי ביצוע ולידציה על השדות-רקאקט עושה זאת
    
        >
            <Typography variant="h5" align="center" component="h1">
                {title}
            </Typography>
            <Container   sx={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"}}>
                {children}
            </Container>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6}>
                 <ButtonsForm
                    node="cancel"
                    color='error'
                    component='div'
                    variant='outlined'
                    onClick={() => navigate(to)}
                 />
              </Grid>
              <Grid item xs={6} >
                 <ButtonsForm
                    node={<LoopIcon />}
                    component='div'
                    variant='outlined'
                    onClick={handleReset}
                 />
              </Grid>
              <Grid item xs={12}>
                 <ButtonsForm
                    node="Submit"
                    disabled={!!formValidate()}
                    onClick={handleSubmit}
                    size='large'
                    variant='outlined'
                 />
              </Grid>
            </Grid>
        </Container>
    )

};

FormInputControl.propTypes = {
    children: node.isRequired,
    onSubmit: func.isRequired,
    onReset: func.isRequired,
    onChange: func.isRequired,
    to: string.isRequired,
    spacing: number.isRequired,
    title: string.isRequired,

};




export default memo(FormInputControl);