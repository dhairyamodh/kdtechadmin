import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Box, Container, Grid, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('lg')]: {
      backgroundColor: "white",
    },
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    height: "70vh",
  },
  authImg: {
    height: "40vh",
    transform: "rotateY(3.142rad)",
    // width: "50vw",
  },
  title: {
    marginBottom: 20,
  },
  lineTitle: {
    fontWeight: "1000",
    color: theme.palette.secondary.main,
  },
  lineDescription: {
    fontWeight: "500",
  },
}));

const AuthIndex = () => {
  const classes = useStyles();
  const [currentForm, setCurrentForm] = React.useState("login");

  const renderAuthForm = () => {
    switch (currentForm) {
      case "login":
        // code block
        return <LoginForm />;

      default:
      // code block
    }
  };
  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" justifyContent="space-evenly">
          {/* <Grid item lg={12}>
            <Box className={classes.title}>
              <Typography color="primary" variant="h3" align="center">
                ADMIN LOGIN
              </Typography>
            </Box>
          </Grid> */}
          {/* <Grid item lg={6} container justify="center">
            <Grid item lg={12}>
              <img src="/images/auth.svg" className={classes.authImg} />
            </Grid>
            <Grid item lg={8}>
              <Box p={2} className={classes.box}>
                <Typography
                  color="textPrimary"
                  variant="h5"
                  align="center"
                  className={classes.lineDescription}
                // align="center"
                >
                  <span className={classes.lineTitle}>Giving</span> Best service
                  to the customers. lorem ipsum dor forot.
                </Typography>
              </Box>
            </Grid>
          </Grid> */}
          <Grid item lg={6} className={classes.imageContainer}>
            {renderAuthForm()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default AuthIndex;
