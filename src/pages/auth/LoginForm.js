import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Fade,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { emailRegex, mobileRegex } from "../../utils/regex";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/userActions";
import { Alert } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "red",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 50,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "white",
    },
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: theme.palette.fontSizes.xl,
    marginBottom: 10,
  },
  subTitle: {
    color: theme.palette.gray[1200],
    fontSize: theme.palette.fontSizes.semibase,
  },
  card: {
    width: "100%",
  },
  helperText: {
    fontSize: "0.9rem",
    color: "red",
    fontWeight: 400,
  },
  ForgotButton: {
    textTransform: "none",
  },
  textField: {
    borderRadius: theme.palette.radius.base,
  },
  btn: {
    fontSize: theme.palette.fontSizes.semibase,
    padding: "10px 22px",
  },
  alert: {
    borderRadius: theme.palette.radius.base,
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: {
      mobile: "9999999999",
      password: "9999999999",
    },
  });
  const { handleSubmit, control, errors, reset } = methods;
  const onSubmit = (data) => {
    setLoading(!loading);
    dispatch(loginUser(data));
  };
  const user = useSelector((state) => state.user);
  console.log("user", user);
  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.card}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            Sign in to Admin Panel
          </Typography>
          <Typography variant="h6" className={classes.subTitle}>
            Enter your details below.
          </Typography>
        </CardContent>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            {/* <TextField control={control} name="email" label="Email address"
              type="email"
              required
            /> */}
            <Controller
              name="mobile"
              fullWidth
              label="Mobile"
              control={control}
              rules={{
                required: { value: true, message: "Mobile is required" },
                pattern: {
                  value: mobileRegex,
                  message: "Invalid Mobile Number",
                },
              }}
              render={(props) => (
                <TextField
                  {...props}
                  fullWidth
                  label="Mobile Number"
                  variant="outlined"
                  placeholder="Enter Mobile"
                  className={classes.textField}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.textField,
                    },
                  }}
                  required={true}
                />
              )} // props contains: onChange, onBlur and value
            />
            <Typography className={classes.helperText}>
              {errors?.mobile?.message}
            </Typography>
          </CardContent>
          <CardContent>
            {/* <TextField control={control} name="password" label="Password"
              helperText={
                errors.password
                  ? errors.password.message || "Password req"
                  : undefined
              }
              FormHelperTextProps={{ className: classes.helperText }}
              rules={{
                required: { value: true, message: "Password is required" },
              }}
              type="password"
              required
            /> */}

            <Controller
              name="password"
              fullWidth
              label="Password"
              control={control}
              rules={{
                required: { value: true, message: "Password is required" },
              }}
              render={(props) => (
                <TextField
                  {...props}
                  fullWidth
                  label="Password"
                  placeholder="Enter Password"
                  required={true}
                  variant="outlined"
                  type="password"
                  className={classes.textField}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.textField,
                    },
                  }}
                  helperText={
                    errors.password
                      ? errors.password.message || "Password req"
                      : undefined
                  }
                  FormHelperTextProps={{ className: classes.helperText }}
                />
              )} // props contains: onChange, onBlur and value
            />
          </CardContent>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item sm={12} md={12} lg={12} xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  disabled={user?.isLoading}
                  className={classes.btn}
                >
                  {user?.isLoading ? (
                    <CircularProgress color="inherit" size={30} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
              {/* <Grid item>
                <Button className={classes.ForgotButton}>
                  <Typography color="textPrimary">Forgot Password ?</Typography>
                </Button>
              </Grid> */}
            </Grid>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};
export default LoginForm;
