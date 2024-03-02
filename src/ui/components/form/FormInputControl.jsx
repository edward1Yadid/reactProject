import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Container } from "@mui/material";
import ButtonsForm from "./ButtonsForm";
import LoopIcon from "@mui/icons-material/Loop";
import { bool, func, node, number, string } from "prop-types";

import useCustomf from "../../../core/hooks/form/useCustomf";

const FormInputControl = ({
  title,
  handleSubmit,
  handleReset,
  onChange,
  to,
  children,
  styles,
}) => {
  const navigate = useNavigate();
  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate //אי ביצוע ולידציה על השדות-רקאקט עושה זאת
    >
      <Typography variant="h5" align="center" component="h1">
        {title}
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
      <Grid container spacing={1} justifyContent={"center"}>
      <Grid item sx={{  minWidth: { xs: 135, sm: 220, md: 290}, }}>
          <ButtonsForm
            node="cancel"
            color="error"
            component="div"
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => navigate(to)}
          />
        </Grid>
        <Grid item sx={{  minWidth: { xs: 135, sm: 220, md: 290}, }}>
          <ButtonsForm
            node={<LoopIcon />}
            component="div"
            onClick={handleReset}
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            
          />
        </Grid>
    
        <Grid item sx={{  minWidth: { xs: 270, sm: 440, md: 580
      }, }}>
          <ButtonsForm
            node="Submit"
            disabled={!!onChange()}
            onClick={handleSubmit}
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
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
