import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Box, CssBaseline } from "@mui/material";
import DashSidebar from "../../components/DashSidebar";
import DashComponent from "../dashboard/DashBoard";
import UsersComponent from "../users";
import Products from "../products";
import Categories from "../categories";
import Platforms from "../platform";
import Users from "../users";
import { Route } from "react-router-dom";
import NavBar from "../../components/Menu";
import Offer from "../offer";
import AmazonProduct from "../products/AmazonProducts";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/action/utilActions";
import { Redirect } from "react-router-dom";

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
  const dispatch = useDispatch();
  const navigate = () => {
    dispatch(openModal("amazon"));
  };

  const Amazon = () => {
    React.useEffect(() => {
      navigate();
    }, []);

    return <Redirect to="/products" />;
  };
  const DashList = [
    {
      component: <DashComponent />,
      path: "/",
    },
    {
      component: <Users />,
      path: "/users",
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
      component: <Amazon />,
      path: "/amazonproducts",
    },

    {
      component: <Offer />,
      path: "/offers",
    },
  ];

  return (
    <Box style={{ display: "flex" }}>
      <CssBaseline />
      <AmazonProduct />
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
