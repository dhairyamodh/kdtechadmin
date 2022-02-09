import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import SnackComponent from "../components/SnackComponent";
import SpinnerModal from "../components/Common/Modals/SpinnerModal";
import checkIfAppReady from "../helper/checkIfAppReady"
import { makeStyles } from "@mui/styles";
import { Box, CssBaseline } from "@mui/material";
import Privacy from "../pages/privacy";
import DashBoard from "../pages/dashboard";
import AuthIndex from "../pages/auth";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.white,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "white",
    },
  },
  container: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(14),
    height: '100%',
    width: '100%',
  },
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "100%",
    padding: 20,
    margin: 20,
  },
}));

const Routes = () => {
  const classes = useStyles();
  const superadmin = "superadmin";
  const admin = "admin";
  const employee = "employee";
  // const spinner = useSelector((state) => state.util.spinner);
  const isLogged = useSelector((state) => state.user.isLogged);

  const ready = checkIfAppReady();
  const getHomepage = () => {
    if (!isLogged) {
      return <Redirect to="/login" />
    }
    return <Redirect to="/dashboard" />;
  }

  React.useEffect(() => {
    getHomepage()
  }, [isLogged])
  return ready ? (
    <div className={classes.root}>
      {/* {spinner && <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 9999, }}><LinearProgress /></div>} */}
      {/* {spinner && <SpinnerModal />} */}
      <SnackComponent />
      <BrowserRouter>
        {/* {!isLogged ? (
          <AuthComponent />
        ) : (
          <DashBoardRoutes />
        )} */}
        <Switch >
          <Route path="/privacy" exact component={Privacy} />
          <Box>
            <CssBaseline />
            {/* <Sidebar /> */}
            {!isLogged ? <AuthIndex /> : <DashBoard />}
          </Box>
        </Switch>
      </BrowserRouter>
    </div>
  ) : <SpinnerModal />;
};
export default Routes;


// import React from "react";
// import makeStyles from "@mui/styles/makeStyles";
// import { useSelector } from "react-redux";
// import AuthIndex from "../pages/auth";
// import DashBoard from "../pages/dashboard";
// import { BrowserRouter } from "react-router-dom";
// import SnackComponent from "../components/SnackComponent";
// import SpinnerModal from "../components/Common/Modals/SpinnerModal";
// import checkIfAppReady from "../helper/checkIfAppReady";
// import { LinearProgress } from "@mui/material";
// const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: "100vh",
  //   backgroundColor: theme.palette.white,
  //   [theme.breakpoints.down("lg")]: {
  //     backgroundColor: "white",
  //   },
  // },
// }));

// const Routes = () => {
//   const classes = useStyles();

//   const isLogged = useSelector((state) => state.user.isLogged);
//   const spinner = useSelector((state) => state.util.spinner);

//   const ready = checkIfAppReady();
//   return ready ? (
//     <div className={classes.root}>
//       {spinner && (
//         <div
//           style={{ position: "absolute", top: 0, width: "100%", zIndex: 9999 }}
//         >
//           <LinearProgress />
//         </div>
//       )}
//       <SnackComponent />
//       <BrowserRouter>{!isLogged ? <AuthIndex /> : <DashBoard />}</BrowserRouter>
//     </div>
//   ) : (
//     <SpinnerModal />
//   );
// };
// export default Routes;
