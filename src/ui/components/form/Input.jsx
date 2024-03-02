// Input.jsx
import { Grid, TextField } from '@mui/material';
import { bool, func, object, string } from 'prop-types';
import React from 'react';

function Input({ name, label, handleChangeFun, error, type, required, data ,Children,...rest}) {
  return (
    <Grid item xs={12} {...rest}>

    <TextField
 sx={{
  minWidth: { xs: 100, sm: 220, md: 290}, 
  m: 1, 
}}
      variant="standard"
 
      margin="normal"
      autoComplete="off"
      id={name}
      label={label}
      value={data[name] ? data[name] : ""}
      name={name}
      type={type}
      required={required}
      onChange={handleChangeFun}
      helperText={error}
      error={Boolean(error)}
    >
      {Children}
    </TextField>
  </Grid>
  );
}

Input.defaultProp={
  required: true
}

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  variant: string.isRequired,
  type: string.isRequired,
  data: object.isRequired,
  label: string.isRequired,
  error: object.isRequired,  
  onChange: func.isRequired,
};

export default Input;
