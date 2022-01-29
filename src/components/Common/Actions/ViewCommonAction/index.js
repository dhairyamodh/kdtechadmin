import { IconButton } from "@mui/material";
import React from "react";
import ViewIcon from '@mui/icons-material/VisibilityTwoTone'

const ViewCommonAction = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" size="small" onClick={() => onClick()}>
      <ViewIcon fontSize="small" />
    </IconButton>
  );
};

export default ViewCommonAction;
