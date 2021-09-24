import React, { useState, useContext } from "react";
import context from "../../context/context";

import useStyles from './stylesToolbar'
import { Button, MenuItem, Container, Paper, InputBase, Typography } from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import MainMenuItem from "./MenuItem/MenuItem";

const Toolbar = () => {
    const classes = useStyles()
    const { lists, activeListTitle, createList } = useContext(context)
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
                {lists.length ? lists.map(i => <MainMenuItem text={i.title} id={i.id} />) : <Typography className={classes.emptyMarker}>List is empty...</Typography>}
                {toggleCreateInput ? (
                    <MenuItem
                        onClick={() => {
                            setToggleCreateInput(!toggleCreateInput)
                        }}
                        className={classes.menuCreateBtn}
                    >Create new list</MenuItem>
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
                                    createList(createInputValue)
                                    setCreateInputValue('')
                                }}
                            >Done</Button>}
                        />
                    </Paper>
                )}
            </Paper>
        </Container>
    )
}

export default Toolbar
