import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import InputContainer from "./InputContainer";
import { DropzoneArea } from "react-mui-dropzone";
import { showSnackBar } from "../../../redux/action/snackActions";
import { useDispatch } from "react-redux";
import { BASEIMAGEURL } from "../../../contants";
const useStyles = makeStyles((theme) => ({
  textField: {
    borderRadius: theme.palette.radius.base,
    minHeight: 20,
    padding: theme.spacing(0, 5, 2),
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.23)",
  },
  title: {
    fontSize: theme.palette.fontSizes.semibase,
  },
}));
const MyTextField = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [file, selectedFile] = React.useState([]);
  const {
    label,
    name,
    options,
    mode,
    optionLabelProp,
    optionValueProp,
    placeholder,
    multiple,
    rows,
    control,
    error,
    defaultOption,
    size,
    noPadding,
    disabled,
    required,
    hasDefaultOption = false,
    defaultValue,
    handleFileFieldChange,
  } = props;
  const handleChange = (files) => {
    selectedFile(files);
    handleFileFieldChange(name, files);
  };
  const dispatch = useDispatch();

  const initialFiles = () => {
    if (defaultValue[0]?.name) {
      return defaultValue;
    }
    if (typeof defaultValue === "object") {
      let initialFiles = [];
      defaultValue?.map((value) => {
        initialFiles.push(BASEIMAGEURL + value);
      });
      return initialFiles;
    } else {
      return [BASEIMAGEURL + defaultValue];
    }
  };
  console.log("mode", mode);
  const limit = 20;
  return (
    <InputContainer size={size}>
      <DropzoneArea
        acceptedFiles={["image/png", "image/jpg", "image/jpeg"]}
        showFileNames
        dropzoneText={`Drag and drop a ${label} here or click`}
        placeholder={placeholder}
        showAlerts={false}
        dropzoneClass={classes.textField}
        dropzoneParagraphClass={classes.title}
        maxFileSize={2000000}
        filesLimit={!multiple ? 1 : limit}
        initialFiles={mode == "edit" && initialFiles()}
        getFileLimitExceedMessage={() => {
          console.log("reached");
          dispatch(
            showSnackBar(
              `Maximum allowed number of files exceeded. Only ${limit} allowed`,
              "error"
            )
          );
        }}
        onChange={handleChange}
        {...props}
      />
    </InputContainer>
  );
});
export default MyTextField;
