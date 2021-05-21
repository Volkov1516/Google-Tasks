import { React, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import DB from './db.json'
import DB2 from './data.json'
import Login from './components/Login'
import List from './components/List'
import Menu from './components/Menu'
import A from './components/A'
import B from './components/B'

const App = (props) => {
    const isLoggedIn = props.isLoggedIn
    
    const [database, setDatabase] = useState(DB)
    const [data, setData] = useState(DB2)
    const [tasks, setTasks] = useState(null)
    const selectTasks = (i) => {
        setTasks(i)
        console.log(tasks)
    }
    useEffect(()=>{
    }, [tasks])



    const [newList, setNewList] = useState(null)
    const changeList = (i) => {
        setNewList([i])
    }
    useEffect(()=>{
    }, [newList])
    


    if (isLoggedIn) {
        return (
            <div className='container'>
                <Menu data={data} selectTasks={selectTasks}/>
                {tasks && <List tasks={tasks} completed={database.list.completed} />}
            
                <A list={database.newList} changeList={changeList}/>
                <B newList={newList} />
            
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))