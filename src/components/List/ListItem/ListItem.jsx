import React, {useState, useContext} from "react";
import tasksContext from "../../../context/tasks-context";

import useStyles from "./stylesListItem"
import {IconButton, InputBase, Paper} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DoneIcon from '@material-ui/icons/Done';

const ListItem = ({text, id}) => {

    const classes = useStyles()

    const {updateTask2, deleteTask2, completeTask2} = useContext(tasksContext)

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
                        startAdornment={<IconButton>
                            <RadioButtonUncheckedIcon onClick={() => completeTask2(id)} fontSize="small"/>
                        </IconButton>}
                        endAdornment={
                            <IconButton>
                                <DeleteRoundedIcon onClick={() => deleteTask2(id)} className={classes.endIcon}
                                                   fontSize="small"/>
                            </IconButton>
                        }
                    />
                ) : (
                    <InputBase value={inputValue} fullWidth multiline onChange={e => setInputValue(e.target.value)}
                               startAdornment={<IconButton>
                                   <DoneIcon onClick={() => {
                                       updateTask2(id, inputValue)
                                       setEnableEdit(!enableEdit)
                                   }}
                                             className={classes.endIcon} fontSize="small"/>
                               </IconButton>}/>
                )}
            </Paper>
        </>
    )
}

export default ListItem