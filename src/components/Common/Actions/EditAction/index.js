import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/EditTwoTone'

const EditCommonAction = ({ onClick }) => {
  return (
    <Tooltip placement="top" title="Edit">
      <IconButton aria-label="delete" size="inherit" onClick={() => onClick()}>
        <EditIcon fontSize="small" color="secondary" />
      </IconButton>
    </Tooltip>
  );
};

export default EditCommonAction;
