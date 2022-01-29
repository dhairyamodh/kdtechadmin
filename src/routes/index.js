import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector } from "react-redux";
import AuthIndex from "../pages/auth";
import DashBoard from "../pages/dashboard";
import { BrowserRouter } from "react-router-dom";
import SnackComponent from "../components/SnackComponent";
import SpinnerModal from "../components/Common/Modals/SpinnerModal";
import checkIfAppReady from "../helper/checkIfAppReady";
import { LinearProgress } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.white,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "white",
    },
  },
}));

const Routes = () => {
  const classes = useStyles();

  const isLogged = useSelector((state) => state.user.isLogged);
  const spinner = useSelector((state) => state.util.spinner);

  const ready = checkIfAppReady();
  return ready ? (
    <div className={classes.root}>
      {spinner && (
        <div
          style={{ position: "absolute", top: 0, width: "100%", zIndex: 9999 }}
        >
          <LinearProgress />
        </div>
      )}
      <SnackComponent />
      <BrowserRouter>{!isLogged ? <AuthIndex /> : <DashBoard />}</BrowserRouter>
    </div>
  ) : (
    <SpinnerModal />
  );
};
export default Routes;
