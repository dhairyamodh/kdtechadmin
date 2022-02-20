import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid } from "@mui/material";
import InfoCard from "../../components/InfoCard";
import UserIcon from "@mui/icons-material/PeopleAltTwoTone";
import SubscriptionIcon from '@mui/icons-material/CardMembershipTwoTone';
import RevenueIcon from "@mui/icons-material/MonetizationOnTwoTone";
import PostIcon from "@mui/icons-material/ImageTwoTone";
import SmartTable from "../../components/Common/SmartTable";
import { numberWithCommas } from "../../contants";
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardData } from '../../redux/action/dashboardAction'
import { Category, Inventory, LocalOffer } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
}));

const DashComponent = () => {
  const dispatch = useDispatch()

  const classes = useStyles();
  const dashboard = useSelector(state => state.all.dashboard);


  React.useEffect(() => {
    dispatch(getDashboardData())
  }, [])


  console.log('dashboard data', dashboard)



  const INfoArray = [
    {
      title: "Total Users",
      icon: UserIcon,
      count: `${dashboard?.users}`,
    },
    {
      title: "Total Products",
      icon: Inventory,
      count: `${dashboard?.products}`,

    },
    {
      title: "Total Offers",
      icon: LocalOffer,
      count: `${dashboard?.offers}`,

    },
    {
      title: "Total Categories",
      icon: Category,
      count: `${dashboard?.categories}`,

    },
  ];

  const TableHeader = [
    {
      title: "Transaction Id",
      numeric: false,
    },
    {
      title: "User Name",
      numeric: false,
    },
    {
      title: "Subscription",
      numeric: false,
    },
    {
      title: "Created At",
      numeric: false,
    },
  ]

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {dashboard && INfoArray.map((item, index) => {
          return (
            <InfoCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              currency={item.currency}
              count={numberWithCommas(item.count)}
            />
          );
        })}

      </Grid>
    </div>
  );
};
export default DashComponent;
