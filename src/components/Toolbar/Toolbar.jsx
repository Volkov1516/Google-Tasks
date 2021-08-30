import React, { useState, useEffect, useContext } from "react";
import tasksContext from "../../context/tasks-context";

import { Button, MenuItem, IconButton, Container, Paper, InputBase } from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import useStyles from './stylesToolbar'
import MainMenuItem from "./MenuItem/MenuItem";

const Toolbar = () => {
    const classes = useStyles()

    const {lists, activeListTitle, createList2} = useContext(tasksContext)

    const [isActive, setIsActive] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const [toggleCreateInput, setToggleCreateInput] = useState(true)
    const [createInputValue, setCreateInputValue] = useState('')

    return (
        <Container className={classes.root} align="center">
            <Button
                onClick={() => {
                    setIsVisible(!isVisible)
                    setIsActive(!isActive)
                }}
                style={isActive ? ({ backgroundColor: "#dadce0" }) : null}
                className={classes.menuBtn}
                size="large"
                endIcon={<ArrowDropDownRoundedIcon />}
            >
                {activeListTitle}
            </Button>

            <Paper
                style={isVisible ? ({ display: 'block' }) : ({ display: 'none' })}
                className={classes.menuPaper}
                elevation="8"
            >
                {lists.map(i => <MainMenuItem text={i.title} id={i.id}/>)}

                {toggleCreateInput ? (
                    <MenuItem onClick={() => {
                        setToggleCreateInput(!toggleCreateInput)
                    }} className={classes.menuCreateBtn}> Create new list </MenuItem>
                ) : (
                    <Paper className={classes.inputPaper}>
                        <InputBase
                        className={classes.inputBase}
                        value={createInputValue}
                        onChange={e => setCreateInputValue(e.target.value)}
                        placeholder="Enter list name..."
                        fullWidth
                        multiline
                        autoFocus="true"
                        endAdornment={<Button 
                                      className={classes.inputBtn}
                                      onClick={() => {
                                        setToggleCreateInput(!toggleCreateInput)
                                        createList2(createInputValue)
                                        setCreateInputValue('')
                                      }}
                                      >OK</Button>}
                    />
                    </Paper>
                ) }
            </Paper>
        </Container>
    )
}

export default Toolbar
