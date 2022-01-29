import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Box, CssBaseline } from "@mui/material";
import DashSidebar from "../../components/DashSidebar";
import DashComponent from "../dashboard/DashBoard";
import UsersComponent from "../users";
import Products from "../products";
import Categories from "../categories";
import Platforms from "../platform"
import { Route } from "react-router-dom";
import NavBar from "../../components/Menu";
import Offer from "../offer";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(3),
    paddingTop: 110,
    height: "100%",
    width: "100%",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "100%",
    padding: 20,
    margin: 20,
  },
}));

const DashBoard = () => {
  const classes = useStyles();
  const DashList = [
    {
      component: <DashComponent />,
      path: "/",
    },
    {
      component: <Platforms />,
      path: "/platforms",
    },
    {
      component: <Categories />,
      path: "/categories",
    },
    {
      component: <Products />,
      path: "/products",
    },
    {
      component: <Offer />,
      path: "/offers",
    },
  ];

  return (
    <Box style={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        style={{ width: 280, flexShrink: 0 }}
        aria-label="mailbox folders"
      >
        <DashSidebar />
      </Box>
      <Box style={{ width: "100%", height: "100%" }}>
        {/* <DashSidebar /> */}
        <NavBar />
        <div className={classes.container}>
          {DashList.map((item, index) => {
            const Component = item.component;
            return (
              <Route
                key={index}
                exact
                path={item.path}
                render={(props) => Component}
              />
            );
          })}
        </div>
      </Box>
    </Box>
  );
};
export default DashBoard;
