import React, { useContext } from "react";
import tasksContext from "../../context/tasks-context";

import {Typography, Button, MenuItem, IconButton} from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const Header = () => {

    const { lists, activeListTitle, isVisible, toggleListMenu, selectList, createList2, updateList2, deleteList2 } = useContext(tasksContext)

    return (
        <div>
            <div>
                <Button onClick={() => toggleListMenu()} >
                    {activeListTitle}
                    <ArrowDropDownRoundedIcon />
                </Button>
            </div>
            <div style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                {lists ? (lists.map(i =>
                    <MenuItem key={i.id}>
                    <span onClick={() => selectList(i.id, i.title)}>{i.title}</span>
                    <IconButton>
                        <EditRoundedIcon onClick={() => updateList2(i.id)} fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <DeleteRoundedIcon onClick={() => deleteList2(i.id)} fontSize="small" />
                    </IconButton>
                    </MenuItem>)) :
                    <div>
                        {/*Этот div нужно оформить!*/}
                        Списков нет!
                    </div>}
                <Button onClick={() => createList2()} size="small" variant="contained" color="primary" >Create new list</Button>
            </div>
        </div>
    )
}

export default Header
