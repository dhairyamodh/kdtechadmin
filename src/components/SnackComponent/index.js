import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch, useSelector } from "react-redux";
import { hideSnackBar } from "../../redux/action/snackActions";
import { Alert } from '@mui/material';
import { Snackbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
  alert: {
    borderRadius: theme.palette.radius.base
  }
}));

const SnackComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const snack = useSelector((state) => state.snack);
  React.useEffect(() => {
    if (snack.open) {
      setTimeout(() => {
        dispatch(hideSnackBar());
      }, 4000);
    }
  }, [snack.open]);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={snack.open}
    >
      <Alert
        variant="filled"
        onClose={() => dispatch(hideSnackBar())}
        severity={snack.severity}
        className={classes.alert}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};
export default SnackComponent;
