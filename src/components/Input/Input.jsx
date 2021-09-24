import React, {useState, useContext} from "react";
import context from "../../context/context";
import useStyles from "./stylesInput"
import {Button, Paper, InputBase} from "@material-ui/core";

const Input = () => {
    const classes = useStyles()
    const {createTask} = useContext(context)
    const [inputValue, setInputValue] = useState('')

    return (
        <Paper className={classes.inputPaper} elevation="4">
            <InputBase
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className={classes.inputBase}
                placeholder="Type here..."
                fullWidth
                multiline
                autoFocus="ture"
                endAdornment={<Button onClick={() => createTask(inputValue, setInputValue)}
                                      className={classes.inputBtn}>Save</Button>}
            />
        </Paper>
    )
}

export default Input