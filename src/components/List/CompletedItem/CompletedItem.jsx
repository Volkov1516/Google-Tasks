import React, { useContext } from "react";
import context from "../../../context/context";
import useStyles from "./stylesCompletedItem"
import { IconButton, InputBase, Paper } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DoneIcon from '@material-ui/icons/Done';

const CompletedItem = ({ text, id }) => {
    const classes = useStyles()
    const { deleteTask, completeTask } = useContext(context)

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.inputItem}
                value={text}
                fullWidth
                multiline
                startAdornment={
                    <IconButton>
                        <DoneIcon onClick={() => completeTask(id)} fontSize="small" />
                    </IconButton>
                }
                endAdornment={
                    <IconButton>
                        <DeleteRoundedIcon onClick={() => deleteTask(id)} className={classes.endIcon} fontSize="small" />
                    </IconButton>
                }
            />
        </Paper>
    )
}

export default CompletedItem