import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { bool, func, string } from 'prop-types';
import useCustomf from '../../../core/hooks/form/useCustomf';
import initialSignUpform from '../../../core/services/form/initialSignUpform';
import joischemasignup from '../../../core/services/form/joischemasignup';

const CheckBocomponents = () => {
  const { value: { datafromApi }, ...rest } = useCustomf(initialSignUpform, joischemasignup);



  
  return (
    <FormControlLabel
    onChange={(e) =>
      rest.setData({ ...datafromApi, isBusiness: !!e.target.checked })
    }
    name="isBusiness"
    control={
      <Checkbox value={datafromApi.isBusiness} color="primary" />
    }
    label="Signup as business"
  ></FormControlLabel>
    
  );
};



export default CheckBocomponents;
