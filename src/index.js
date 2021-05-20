import { React, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import DB from './db.json'
import Login from './components/Login'
import List from './components/List'
import Menu from './components/Menu'
import A from './components/A'
import B from './components/B'

/**
 * Отрендерить имена списков в Меню
 */

const App = (props) => {
    const isLoggedIn = props.isLoggedIn
    const [database, setDatabase] = useState(DB)

    
    const [newList, setNewList] = useState(null)
    const changeList = (i) => {
        setNewList([i])
    }
    useEffect(()=>{
        console.log(newList)
    }, [newList])


    if (isLoggedIn) {
        return (
            <div className='container'>
                <Menu name={database.list.name} />    
                <List tasks={database.list.tasks} completed={database.list.completed}/>
            
            <A list={database.newList} changeList={changeList}/>
            <B newList={newList}/>

            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))