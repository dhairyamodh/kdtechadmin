import { TextField } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import InputContainer from "./InputContainer";
import { Controller, useWatch } from "react-hook-form";
import RichTextEditor from 'react-rte';
// import SunEditor from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css";
const useStyles = makeStyles((theme) => ({
  textField: {
    borderRadius: theme.palette.radius.base,
  },
}));
const TextBox = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { label, control, placeholder, type, size, error, defaultValue } = props;
  const [state, setState] = React.useState(RichTextEditor.createEmptyValue())
  console.log('defaultValue', defaultValue);
  React.useEffect(() => {
    if (defaultValue && defaultValue !== '') {
      setState(RichTextEditor.createValueFromString(defaultValue, "html"))
    }
  }, [defaultValue])
  return (
    <InputContainer size={size}>
      <Controller
        name="name"
        control={control}
        {...props}
        render={(props) => {
          console.log('props', props.value);
          return (
            <RichTextEditor value={state} onChange={(value) => {
              console.log('value', value);
              setState(value)
              props.onChange(value.toString('html'))
            }} />
          )
        }} // props contain
        rules={{
          required: {
            value: true,
            message: `${label} is required`,
          },
        }}
      />
    </InputContainer>
  );
});
export default TextBox;
