import React, {useState, useEffect, useReducer} from 'react'
import tasksContext from './tasks-context'
import tasksReducer from './tasks-reducer'
import { TOGGLE_LIST_MENU } from './tasks-actions'
import axios from 'axios'

const TasksState = (props) => {
    const [lists, setLists] = useState([])
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/lists').then(resp => setLists(resp.data))
        .then(() => axios.get('http://localhost:3001/tasks').then(resp => setTasks(resp.data)))
    }, [])

    const initialState = {
        lists,
        tasks,
        isVisible: false
    }

    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const toggleListMenu = () => {
        dispatch({
            type: TOGGLE_LIST_MENU
        })
    }

    return (
    <tasksContext.Provider value={{lists: state.lists, isVisible: state.isVisible, toggleListMenu }}>
        {props.children}
    </tasksContext.Provider>
    )
}

export default TasksState
