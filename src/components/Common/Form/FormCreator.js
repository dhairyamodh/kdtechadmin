import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Inputs from "../Inputs";
import {
  Grid,
  CircularProgress,
  Button,
  DialogActions,
  Divider,
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  Box,
  DialogContent,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
}));
const FormCreator = ({
  open,
  onClose,
  title,
  onSubmit,
  size,
  data,
  mode,
  fullScreen,
  formData,
  defaultValues,
  watchFields = [],
  onWatchChange = () => {},
}) => {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  const {
    register,
    handleSubmit,
    watch,
    errors,
    control,
    formState,
    reset,
    setValue,
    getValues,
  } = methods;

  // console.log("methods", methods);
  const isLoading = useSelector((state) => state.util.spinner);
  const [formErrors, setFormErrors] = React.useState({});

  const [fileFields, setFileFields] = React.useState();
  const [otherFields, setOtherFields] = React.useState({});
  const classes = useStyles();
  // const dispatch = useDispatch();

  React.useEffect(() => {
    setFormErrors(formState.errors);
  }, [formState]);
  const handleFileFieldChange = (name, file) => {
    setFileFields({
      [name]: file,
    });
  };

  const localSubmit = (values) => {
    onSubmit({ ...data, ...values, ...fileFields, ...otherFields });
  };

  const handleOtherChange = ({ name, value }) => {
    console.log("handleOtherChange", name, value);
    setOtherFields({
      ...otherFields,
      [name]: value,
    });
  };

  const handleClose = () => {
    onClose();
    setFormErrors();
    reset();
  };

  console.log("formErrors", formErrors);

  const btnRef = React.useRef();
  return (
    <div>
      <FormProvider {...methods}>
        <form class="form-parsley" onSubmit={handleSubmit(localSubmit)}>
          <Grid container spacing={2}>
            {formData.map((item, index) => {
              const MyInput = Inputs[item.type];
              // console.log('item.name', item.name, data[item.name]);
              return (
                mode !== item?.hideAt && (
                  <MyInput
                    {...item}
                    key={index}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    defaultValue={data ? data[item.name] : ""}
                    ref={register(item.rules)}
                    error={formErrors[item.name]?.message}
                    mode={mode}
                    handleFileFieldChange={handleFileFieldChange}
                    handleOtherChange={handleOtherChange}
                    disabled={
                      item.disabled ||
                      (item?.disabledCondition &&
                        item?.disabledCondition({ mode }))
                    }
                  />
                )
              );
            })}
          </Grid>

          <input type="submit" style={{ display: "none" }} ref={btnRef} />
        </form>
      </FormProvider>

      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="flex-end"
        spacing={5}
        style={{ marginTop: 10 }}
      >
        <Button
          disabled={isLoading}
          variant="text"
          onClick={() => handleClose()}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            btnRef.current.click();
          }}
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={25} />
          ) : (
            "Submit"
          )}
        </Button>
      </Stack>
    </div>
  );
};

export default FormCreator;
