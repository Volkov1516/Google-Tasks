import React, { useState, useContext } from "react";
import tasksContext from "../../../context/tasks-context";

import useStyles from "./stylesMenuItem"
import { IconButton, InputBase, Paper } from "@material-ui/core";
import EditRounded from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DoneIcon from '@material-ui/icons/Done';

const MainMenuItem = ({ text, id }) => {

    const classes = useStyles()

    const { selectList, updateList2, deleteList2 } = useContext(tasksContext)

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
                                    <DeleteRoundedIcon onClick={() => deleteList2(id)} className={classes.endIcon}
                                        fontSize="small" />
                                </IconButton>
                            </>
                        }
                    />
                ) : (
                    <InputBase value={inputValue} fullWidth multiline onChange={e => setInputValue(e.target.value)}
                        endAdornment={<IconButton>
                            <DoneIcon onClick={() => {
                                updateList2(id, inputValue)
                                setEnableEdit(!enableEdit)
                            }}
                                className={classes.endIconToggle} fontSize="small" />
                        </IconButton>} />
                )}
            </Paper>
        </>
    )
}

export default MainMenuItem