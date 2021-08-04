import ReactDOM from 'react-dom';
import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import Header from './components/Header/Header';
import Body from './components/Body/Body';

/*
const App = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/lists').then(resp => {
            setData(resp.data)
        })
    }, [setData])

    const [activeList, setActiveList] = useState(1)
    const [activeListName, setActiveListName] = useState('Default list')
    const setId = (id, name) => {
        setActiveList(id)
        setActiveListName(name)
    }

    const creacteList = () => {
        const listName = window.prompt("Create a name:")
        const updatedList = {
            id: data.length + 1,
            name: listName,
            tasks: [],
            completed: []
        }
        setData([...data, updatedList])
    }

    const removeList = (id) => {
        const updatedList = [...data].filter(i => i.id != id)
        setData(updatedList)
    }

    return (
        <div>
            <Menu data={data} getId={setId} creacteList={creacteList} activeListName={activeListName} removeList={removeList} />
            {data.map((i) => {
                if (i.id === activeList)
                    return <List tasks={i.tasks} completed={i.completed} />
            })}
        </div>
    )
}
*/

const App = () => {
//Полечение данных JSON
    const [lists, setLists] = useState([])
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/lists').then(resp => setLists(resp.data))
        .then(() => axios.get('http://localhost:3001/tasks').then(resp => setTasks(resp.data)))
    }, [])

//Функция показать/скрыть меню списков
    const [isVisible, setIsVisible] = useState(false) 
    const showLists = () => {
        setIsVisible(!isVisible)
    }
//Функция добавление нового списка
    const createList = () => {
        const listTitle = window.prompt("Enter a name: ")
        axios.post('http://localhost:3001/lists', {
            id: uuidv4(),
            title: listTitle
        }).then(resp => setLists([...lists, resp.data]))
    }
//Функция редактирования названия списка
    const updateList = (id) => {
        const listTitle = window.prompt("Enter a name: ")
        axios.put('http://localhost:3001/lists/' + id, {
            id,
            title: listTitle
        }).then(resp => setLists([...lists, resp.data]))
    }
//Функция удаления списка из JSON
    const deleteList = (id) => {
        axios.delete('http://localhost:3001/lists/' + id).then(resp => setLists([...lists, resp.data]))
    }
//Функция выбора списка задач по клику на список
const [listIdValue, setListIdValue] = useState(1)
const selectListId = (id) => {
    lists.map((i) => {
        if(i.id === id){
            setListIdValue(id)
        }
    })
}  
//Функция добавления новой задачи
    const [taskInputValue, setTaskInputValue] = useState('')
    const createTask = () => {
        axios.post('http://localhost:3001/tasks', {
            listID: listIdValue,
            id: uuidv4(),
            text: taskInputValue,
            completed: false
        }).then(resp => setTasks([...tasks, resp.data]))
        setTaskInputValue('')
    }
//Функция редактирования задачи
    const updateTask = (id) => {
        const taskText = window.prompt("Enter a text: ")
        axios.put('http://localhost:3001/tasks/' + id, {
            listID: 1,
            id,
            text: taskText,
            completed: false
        }).then(resp => setTasks([...tasks, resp.data]))
    } 
//Функция удаления задачи 
    const deleteTask = (id) => {
        axios.delete('http://localhost:3001/tasks/' + id).then(resp => setTasks([...tasks, resp.data]))
    } 
//Функция завершения задачи, а также ее восстановление
    const completeTask = (id) => {
        tasks.map(i => {
            if(i.id === id && i.completed === false) {
                return axios.put('http://localhost:3001/tasks/' + id, {
                    listID: i.listID,
                    id: i.id,
                    text: i.text,
                    completed: true
                }).then(resp => setTasks([...tasks, resp.data]))
                
            } else if(i.id === id && i.completed === true){
                return axios.put('http://localhost:3001/tasks/' + id, {
                    listID: i.listID,
                    id: i.id,
                    text: i.text,
                    completed: false
                }).then(resp => setTasks([...tasks, resp.data]))
            }
        })
    } 
//Функция показать/скрыть завершенные задачи
    const [isVisibleCompleted, setIsVisibleCompleted] = useState(false) 
    const showCompleted = () => {
        setIsVisibleCompleted(!isVisibleCompleted)
    }

    return (
        <div>
            <Header lists={lists} isVisible={isVisible} showLists={showLists} selectListId={selectListId} createList={createList} updateList={updateList} deleteList={deleteList} />
            <Body tasks={tasks} isVisibleCompleted={isVisibleCompleted} listIdValue={listIdValue} showCompleted={showCompleted} taskInputValue={taskInputValue} setTaskInputValue={setTaskInputValue} createTask={createTask} updateTask={updateTask} deleteTask={deleteTask} completeTask={completeTask}/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))

/**************************************************************************************************
 * ЗАДАЧИ:
 * - Баг с рендером при редактировании и удалении объекта в функциях udpade/deleteList
 * - Баг с первоначальным listIdValue = 1 
 * - Баг названия активного списка в header
 * 
 * 
 * - Добавить useReduser + useContext
 * - Добавить стили. Изучить библиотеки для UI
 */