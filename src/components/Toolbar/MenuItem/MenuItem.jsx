import React, { useState, useContext } from "react";
import context from "../../../context/context";

import useStyles from "./stylesMenuItem"
import { IconButton, InputBase, Paper } from "@material-ui/core";
import EditRounded from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DoneIcon from '@material-ui/icons/Done';

const MainMenuItem = ({ text, id }) => {

    const classes = useStyles()

    const { selectList, updateList, deleteList } = useContext(context)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputValue, setInputValue] = useState(text)

    return (
        <>
            <Paper className={classes.root}>
                {!enableEdit ? (
                    <InputBase
                        onClick={() => selectList(id, text)}
                        className={classes.inputItem}
                        value={text}
                        fullWidth
                        multiline
                        endAdornment={
                            <>
                                <IconButton>
                                    <EditRounded onClick={() => setEnableEdit(!enableEdit)} className={classes.endIcon}
                                        fontSize="small" />
                                </IconButton>
                                <IconButton>
                                    <DeleteRoundedIcon onClick={() => deleteList(id)} className={classes.endIcon}
                                        fontSize="small" />
                                </IconButton>
                            </>
                        }
                    />
                ) : (
                    <InputBase
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        fullWidth
                        multiline
                        endAdornment={
                            <IconButton>
                                <DoneIcon
                                    onClick={() => {
                                        updateList(id, inputValue)
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

export default MainMenuItem