import { Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
import AddNewIcon from "@mui/icons-material/Add";


const AddCommonAction = ({ onClick, title }) => {
    return (
        <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={() => onClick()}
            startIcon={<AddNewIcon />}
        >
            Add {title}
        </Button>
    );
};

export default AddCommonAction;