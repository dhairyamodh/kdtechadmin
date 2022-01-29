import React from "react";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
}));

const Loggednav = () => {
  const classes = useStyles();

  return <div className={classes.root}>Logged Nav</div>;
};
export default Loggednav;
