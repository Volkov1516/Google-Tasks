import React, {useState, useEffect, useContext} from "react";
import tasksContext from "../../context/tasks-context";

import {Button, MenuItem, IconButton, Container, Paper} from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './stylesToolbar'

const Toolbar = () => {
    const classes = useStyles()

    const [isActive, setIsActive] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const {
        lists,
        activeListTitle,
        selectList,
        createList2,
        updateList2,
        deleteList2,
        toggleSubmenu
    } = useContext(tasksContext)

    return (
        <Container className={classes.root} align="center">
            <Button
                onClick={() => {
                    setIsVisible(!isVisible)
                    setIsActive(!isActive)
                }}
                style={isActive ? ({backgroundColor: "#dadce0"}) : null}
                className={classes.menuBtn}
                size="large"
                endIcon={<ArrowDropDownRoundedIcon/>}
            >
                {activeListTitle}
            </Button>

            <Paper
                style={isVisible ? ({display: 'block'}) : ({display: 'none'})}
                className={classes.menuPaper}
                elevation="8"
            >
                {lists.map(i =>
                        <MenuItem className={classes.menuItem}>
                            <div key={i.id} onClick={() => selectList(i.id, i.title)} className={classes.menuTitle}>
                                {i.title}
                            </div>
                            <IconButton className={classes.menuIconWrapper}>
                                <MoreVertIcon onClick={() => toggleSubmenu(i.id)} className={classes.menuIcon}
                                              fontSize="small"/>
                            </IconButton>

                            <Paper
                                style={i.submenu ? ({display: 'block'}) : ({display: 'none'})}
                                className={classes.submenuPaper}
                                elevation="8"
                            >
                                <MenuItem onClick={() => updateList2(i.id)}>Edit</MenuItem>
                                <MenuItem onClick={() => deleteList2(i.id)}>Delete</MenuItem>
                            </Paper>
                        </MenuItem>
                )
                }
                <MenuItem onClick={() => createList2()} className={classes.menuCreateBtn}> Create new list </MenuItem>
            </Paper>

            <div className={classes.first}>
                <div className={classes.second}></div>
            </div>
        </Container>
    )
}

export default Toolbar
