import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { CURRENCY } from "../../contants";

import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.palette.radius.medium,
    backgroundColor: theme.palette.white,
    transition: "all 0.5s ease",
    cursor: "pinter",
    border: `1px solid ${theme.palette.gray[700]}`,
    cursor: 'pointer',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    "&:hover": {
      boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
      borderColor: 'transparent',
    },
  },
  iconBox: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    background: theme.palette.primary.light,
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.palette.radius.bigger,
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: theme.palette.fontSizes.base,
    color: theme.palette.text.primary,
    fontWeight: theme.palette.fontWeights.semiBold,
  },
  count: {
    fontSize: theme.palette.fontSizes.xxl,
    color: theme.palette.text.primary,
    fontWeight: theme.palette.fontWeights.bold,
    marginTop: theme.spacing(1)
  },
}));

const InfoCard = ({ title, icon, count, currency }) => {
  const classes = useStyles();

  const Icon = icon;
  return (
    <Grid item lg={3}>
      <Paper className={classes.root} elevation={0}>
        <Box className={classes.iconBox}>
          <Icon />
        </Box>
        <Typography className={classes.count}>{currency && CURRENCY} {count}</Typography>
        <Typography className={classes.title}>{title}</Typography>
      </Paper>
    </Grid>
  );
};
export default InfoCard;
