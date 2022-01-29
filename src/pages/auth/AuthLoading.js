import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
}));

const AuthLoading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>authloading</h1>
      <CircularProgress color="secondary" size={80} />
    </div>
  );
};
export default AuthLoading;
