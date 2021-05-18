import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import DB from './db.json'
import Login from './components/Login'
import List from './components/List'
import Menu from './components/Menu'
/**
 * ЗАДАЧА: Выбор списка задач через меню
 * Отрендерить названия списков
 */
const App = (props) => {
    const [database, setDatabase] = useState(DB)

    const isLoggedIn = props.isLoggedIn

    if (isLoggedIn) {
        return (
            <div className='container'>
                {/**Передаем массив списков в Меню */}
                <Menu name={database.list.name} Lists={database.Lists}/>    
                <List tasks={database.list.tasks} completed={database.list.completed}/>
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))