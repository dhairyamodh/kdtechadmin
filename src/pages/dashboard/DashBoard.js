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

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
}));

const DashComponent = () => {
  const classes = useStyles();

  const INfoArray = [
    {
      title: "Total Active Users",
      icon: UserIcon,
      count: 1000,
    },
    {
      title: "Total Subscriptions",
      icon: SubscriptionIcon,
      count: 10,
    },
    {
      title: "Total Revenue",
      icon: RevenueIcon,
      count: 45215,
      currency: true,
    },
    {
      title: "Total Post",
      icon: PostIcon,
      count: 2045,
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
        {INfoArray.map((item, index) => {
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
        <Grid item lg={12}>
          <SmartTable
            header={TableHeader}
            body={[]}
            tableTitle="Latest Subscriptions"
            onRowSelect={() => { }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default DashComponent;
