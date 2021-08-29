import React, {useState, useEffect, useContext} from "react";
import tasksContext from "../../context/tasks-context";

import ListItem from "./ListItem/ListItem";
import CompletedItem from "./CompletedItem/CompletedItem";
import useStyles from "./stylesList";
import {Button} from "@material-ui/core";

const List = () => {
    const classes = useStyles()

    const {tasks, listIdValue} = useContext(tasksContext)

    const [isActive, setIsActive] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <div>
                {tasks.map((i) => {
                    if (i.listID === listIdValue && !i.completed) {
                        return <div key={i.id}>
                            <ListItem text={i.text} id={i.id}/>
                        </div>
                    }
                })}
            </div>
            <Button
                onClick={() => {
                    setIsVisible(!isVisible)
                    setIsActive(!isActive)
                }}
                style={isActive ?  ({backgroundColor: "#dadce0"}) : null}
                className={classes.toggleBtn}
            >
                Completed
            </Button>
            <div style={isVisible ? ({display: 'block'}) : ({display: 'none'})}>
                {tasks.map((i) => {
                    if (i.listID === listIdValue && i.completed) {
                        return <div key={i.id}>
                            <CompletedItem text={i.text} id={i.id}/>
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default List
