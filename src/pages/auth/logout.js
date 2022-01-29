import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/action/userActions";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
}));

const Logout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(logoutUser());
  }, []);
  return (
    <div className={classes.root}>
      <Redirect to="/" />
    </div>
  );
};
export default Logout;
