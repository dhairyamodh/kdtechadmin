import React from "react";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
}));

const NavIndex = () => {
  const classes = useStyles();

  return <div className={classes.root}>Navbar</div>;
};
export default NavIndex;
