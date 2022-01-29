import React from "react";
import { useSelector } from "react-redux";
import leftSideBarRoutes from "../../Routes/leftSideBarRoutes";
import View from "./view";

const LeftSideBar = () => {
  return <View sidebarData={leftSideBarRoutes} />;
};

export default LeftSideBar;
