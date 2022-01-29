import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteTwoTone'
import React from "react";

const DeleteCommonAction = ({ onClick }) => {
  return (
    <Tooltip placement="top" title="Delete">
      <IconButton aria-label="delete" size="inherit" onClick={() => onClick()}>
        <DeleteIcon fontSize="small" color="error" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteCommonAction;
