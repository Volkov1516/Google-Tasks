import React, { useState, useContext } from "react";
import context from "../../../context/context";
import useStyles from "./stylesListItem"
import { IconButton, InputBase, Paper } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DoneIcon from '@material-ui/icons/Done';

const ListItem = ({ text, id }) => {
    const classes = useStyles()
    const { updateTask, deleteTask, completeTask } = useContext(context)
    const [enableEdit, setEnableEdit] = useState(false)
    const [inputValue, setInputValue] = useState(text)

    return (
        <>
            <Paper className={classes.root}>
                {!enableEdit ? (
                    <InputBase
                        onClick={() => setEnableEdit(!enableEdit)}
                        className={classes.inputItem}
                        value={text}
                        fullWidth
                        multiline
                        startAdornment={
                            <IconButton>
                                <RadioButtonUncheckedIcon onClick={() => completeTask(id)} fontSize="small" />
                            </IconButton>
                        }
                        endAdornment={
                            <IconButton>
                                <DeleteRoundedIcon onClick={() => deleteTask(id)} className={classes.endIcon} fontSize="small" />
                            </IconButton>
                        }
                    />
                ) : (
                    <InputBase
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        fullWidth
                        multiline
                        startAdornment={
                            <IconButton>
                                <DoneIcon onClick={() => {
                                    updateTask(id, inputValue)
                                    setEnableEdit(!enableEdit)
                                    }}
                                    className={classes.endIconToggle}
                                    fontSize="small"
                                />
                            </IconButton>
                        }
                    />
                )}
            </Paper>
        </>
    )
}

export default ListItem