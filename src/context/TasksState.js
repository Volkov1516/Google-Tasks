import React, {useState, useEffect, useReducer} from 'react'
import tasksContext from './tasks-context'
import tasksReducer from './tasks-reducer'
import {
    GET_LISTS, SET_INITIAL_LIST, TOGGLE_LIST_MENU, SELECT_LIST, CREATE_LIST, UPDATE_LIST, DELETE_LIST,
    GET_TASKS, SHOW_COMPLETED, CREATE_TASK, UPDATE_TASK, DELETE_TASK, COMPLETE_TASK
} from './tasks-actions'

import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const TasksState = (props) => {

    const initialState = {
        lists: [],
        tasks: [],
        isVisible: false,
        listIdValue: 1,
        activeListTitle: '',
        isVisibleCompleted2: false,
        taskInputValue2: ''
    }

    const [state, dispatch] = useReducer(tasksReducer, initialState)

    //Функция получения lists из JSON.
    //Рендер первого списка из массива по умолчанию при обновлении
    //Также рендер этого же title для заголовка
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
    },[])
    //Функция обновления list при изменении
    useEffect(() => {
        axios.get('http://localhost:3001/lists').then((resp) => {
            dispatch({
                type: GET_LISTS,
                payload: resp.data
            })
        })
    }, [state.lists])
    //Функция показать/скрыть меню списка
    const toggleListMenu = () => {
        dispatch({
            type: TOGGLE_LIST_MENU
        })
    }
    //Функция выбора списка
    const selectList = (id, title) => {
        dispatch({
            type: SELECT_LIST,
            payloadId: id,
            payloadTitle: title
        })
    }
    //Функция создания списка
    const createList2 = () => {
        const listTitle = window.prompt("Enter a name: ")
        {listTitle ? (
            axios.post('http://localhost:3001/lists', {
                id: uuidv4(),
                title: listTitle
            }).then((resp) => {
                dispatch({
                    type: CREATE_LIST,
                    payload: resp.data
                })
            })
        ) : alert("Неправильное имя списка!")}
    }
    //Функция редактирования названия списка
    const updateList2 = (id) => {
        const listTitle = window.prompt("Enter a name: ")
        {listTitle ? (
            axios.put('http://localhost:3001/lists/' + id, {
                id,
                title: listTitle
            }).then((resp) => {
                dispatch({
                    type: UPDATE_LIST,
                    payload: resp.data
                })
            })
        ) : (alert("Невозможно создать пустой список!"))}
    }
    //Функция удаления списка из JSON
    const deleteList2 = (id) => {
        axios.delete('http://localhost:3001/lists/' + id).then((resp) => {
            dispatch({
                type: DELETE_LIST,
                payload: resp.data
            })
        })
    }
    //Функция получения tasks из JSON
    useEffect(() => {
        axios.get('http://localhost:3001/tasks').then((resp) => {
            dispatch({
                type: GET_TASKS,
                payload: resp.data
            })
        })
    },[])
    //Функция обновления tasks при изменении
    useEffect(() => {
        axios.get('http://localhost:3001/tasks').then((resp) => {
            dispatch({
                type: GET_TASKS,
                payload: resp.data
            })
        })
    }, [state.tasks])
    //Функция показать/скрыть завершенные задачи
    const showCompleted2 = () => {
        dispatch({
            type: SHOW_COMPLETED
        })
    }
    //Функция добавления новой задачи
    const [taskInputValue2, setTaskInputValue2] = useState('')
    const createTask2 = () => {
        {taskInputValue2 ? (
                axios.post('http://localhost:3001/tasks', {
                    listID: state.listIdValue,
                    id: uuidv4(),
                    text: taskInputValue2,
                    completed: false
                }).then((resp) => {
                    dispatch({
                        type: CREATE_TASK,
                        payload: resp.data
                    })
                })

        ) : (
            alert("Невозможно создать пустой список!")
        )}
        setTaskInputValue2('')
    }
    //Функция редактирования задачи
    const updateTask2 = (id) => {
        const taskText = window.prompt("Enter a text: ")
        {taskText ? (
            axios.put('http://localhost:3001/tasks/' + id, {
                listID: state.listIdValue,
                id,
                text: taskText,
                completed: false
            }).then((resp) => {
                dispatch({
                    type: UPDATE_TASK,
                    payload: resp.data
                })
            })
        ) : (alert("Невозможно создать пустой список!"))}
    }
    //Функция удаления задачи
    const deleteTask2 = (id) => {
        axios.delete('http://localhost:3001/tasks/' + id).then((resp) => {
            dispatch({
                type: DELETE_TASK,
                payload: resp.data
            })
        })
    }
    //Функция завершения задачи, а также ее восстановление
    const completeTask2 = (id) => {
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
                })
            }
        })
    }

    return (
    <tasksContext.Provider value={{
        lists: state.lists,
        activeListTitle: state.activeListTitle,
        isVisible: state.isVisible,
        toggleListMenu,
        listIdValue: state.listIdValue,
        selectList,
        createList2,
        updateList2,
        deleteList2,
        tasks: state.tasks,
        isVisibleCompleted2: state.isVisibleCompleted2,
        showCompleted2,
        taskInputValue2,
        setTaskInputValue2,
        createTask2,
        updateTask2,
        deleteTask2,
        completeTask2
    }}>
        {props.children}
    </tasksContext.Provider>
    )
}

export default TasksState
