import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import context from './context'
import reducer from './reducer'
import {
    GET_LISTS, SET_INITIAL_LIST, CREATE_LIST, DELETE_LIST, SELECT_LIST,
    GET_TASKS, CREATE_TASK, DELETE_TASK, COMPLETE_TASK
} from './actions'

const State = (props) => {

    const initialState = {
        lists: [],
        tasks: [],
        listIdValue: 1,
        activeListTitle: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState)

//List functions (CRUD + select list)
    useEffect(() => {
        axios.get('http://localhost:3001/lists').then((resp) => {
            dispatch({
                type: GET_LISTS,
                payload: resp.data
            })
            const initialListId = resp.data[0].id
            const initialListTitle = resp.data[0].title
            dispatch({
                type: SET_INITIAL_LIST,
                payloadId: initialListId,
                payloadTitle: initialListTitle
            })
        })
    }, [])

    const createList = (createInputValue) => {
        axios.post('http://localhost:3001/lists', {
            id: uuidv4(),
            title: createInputValue,
            submenu: false
        }).then((resp) => {
            dispatch({
                type: CREATE_LIST,
                payload: resp.data
            })
        })
    }

    const updateList = (id, inputValue) => {
        axios.put('http://localhost:3001/lists/' + id, {
            id,
            title: inputValue,
            submenu: false
        }).then(() => {
            axios.get('http://localhost:3001/lists').then((resp) => {
                dispatch({
                    type: GET_LISTS,
                    payload: resp.data
                })
            })
        })
    }

    const deleteList = (id) => {
        state.tasks.map(i => {
            if (i.listID === id) {
                axios.delete('http://localhost:3001/tasks/' + i.id).then((resp) => {
                    dispatch({
                        type: DELETE_TASK,
                        payload: resp.data
                    })
                }).then(() => {
                    axios.get('http://localhost:3001/tasks').then((resp) => {
                        dispatch({
                            type: GET_TASKS,
                            payload: resp.data
                        })
                    })
                })
            }
        })

        axios.delete('http://localhost:3001/lists/' + id).then((resp) => {
            dispatch({
                type: DELETE_LIST,
                payload: resp.data
            })
        }).then(() => {
            axios.get('http://localhost:3001/lists').then((resp) => {
                dispatch({
                    type: GET_LISTS,
                    payload: resp.data
                })
            })
        })
    }

    const selectList = (id, title) => {
        dispatch({
            type: SELECT_LIST,
            payloadId: id,
            payloadTitle: title
        })
    }


//Task functions ( CRUD + complete task )
    useEffect(() => {
        axios.get('http://localhost:3001/tasks').then((resp) => {
            dispatch({
                type: GET_TASKS,
                payload: resp.data
            })
        })
    }, [])
    
    const createTask = (inputValue, setInputValue) => {
        axios.post('http://localhost:3001/tasks', {
            listID: state.listIdValue,
            id: uuidv4(),
            text: inputValue,
            completed: false
        }).then((resp) => {
            dispatch({
                type: CREATE_TASK,
                payload: resp.data
            })
        })
        setInputValue('')
    }
    
    const updateTask = (id, inputValue) => {
        axios.put('http://localhost:3001/tasks/' + id, {
            listID: state.listIdValue,
            id,
            text: inputValue,
            completed: false
        }).then(() => {
            axios.get('http://localhost:3001/tasks').then((resp) => {
                dispatch({
                    type: GET_TASKS,
                    payload: resp.data
                })
            })
        })
    }
    
    const deleteTask = (id) => {
        axios.delete('http://localhost:3001/tasks/' + id).then((resp) => {
            dispatch({
                type: DELETE_TASK,
                payload: resp.data
            })
        }).then(() => {
            axios.get('http://localhost:3001/tasks').then((resp) => {
                dispatch({
                    type: GET_TASKS,
                    payload: resp.data
                })
            })
        })
    }
    
    const completeTask = (id) => {
        state.tasks.map((i) => {
            if (i.id === id && i.completed === false) {
                return axios.put('http://localhost:3001/tasks/' + id, {
                    listID: i.listID,
                    id: i.id,
                    text: i.text,
                    completed: true
                }).then((resp) => {
                    dispatch({
                        type: COMPLETE_TASK,
                        payload: resp.data
                    })
                }).then(() => {
                    axios.get('http://localhost:3001/tasks').then((resp) => {
                        dispatch({
                            type: GET_TASKS,
                            payload: resp.data
                        })
                    })
                })

            } else if (i.id === id && i.completed === true) {
                return axios.put('http://localhost:3001/tasks/' + id, {
                    listID: i.listID,
                    id: i.id,
                    text: i.text,
                    completed: false
                }).then((resp) => {
                    dispatch({
                        type: COMPLETE_TASK,
                        payload: resp.data
                    })
                }).then(() => {
                    axios.get('http://localhost:3001/tasks').then((resp) => {
                        dispatch({
                            type: GET_TASKS,
                            payload: resp.data
                        })
                    })
                })
            }
        })
    }

    return (
        <context.Provider value={{
            lists: state.lists,
            activeListTitle: state.activeListTitle,
            listIdValue: state.listIdValue,
            createList,
            updateList,
            deleteList,
            selectList,
            tasks: state.tasks,
            createTask,
            updateTask,
            deleteTask,
            completeTask
        }}>
            {props.children}
        </context.Provider>
    )
}

export default State
