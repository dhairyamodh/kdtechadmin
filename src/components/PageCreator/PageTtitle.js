import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    }
}))

const PageTitle = ({ title, endAction: EndAction, headerComponents }) => {
    const classes = useStyles()
    return (
        title && (
            <div className={classes.root} >
                <div className={classes.root}>
                    {headerComponents &&
                        headerComponents?.map((Comp, index) => {
                            return (
                                <div style={{ marginLeft: 20 }}>
                                    <Comp />
                                </div>
                            );
                        })}
                </div>

                {EndAction && <EndAction />}

            </div>
        )
    );
};

export default PageTitle;
