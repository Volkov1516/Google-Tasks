import React, {useState, useContext} from "react";
import tasksContext from "../../context/tasks-context";

import {
    Button,
    Paper,
    InputBase
} from "@material-ui/core";
import useStyles from "./stylesInput"

const Input = () => {
    const classes = useStyles()

    const {createTask2} = useContext(tasksContext)

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
                endAdornment={<Button onClick={() => createTask2(inputValue, setInputValue)}
                                      className={classes.inputBtn}>OK</Button>}
            />
        </Paper>
    )
}

export default Input