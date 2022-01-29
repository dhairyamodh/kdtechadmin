import React from "react";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return <div className={classes.root}>Forgot Form</div>;
};
export default LoginForm;
