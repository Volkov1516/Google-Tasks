/**ЗАДАЧИ
 * Создать документ с визуализацией архитектуры приложения 
 * Визуализировать базу данных
 * Редактировать JSON файл 
 * Перекинуть App.jsx отдельным файлом
 * Использовать модульный подходи для CSS
 * Создать функционал добавления задач и заметок
 * Создать функционал добавления групп
 * Добавить функционал перетаскивания элементов
 * Адаптивный дизайн
 * Hook Reduser
 * 
 */

import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import DB from './db.json'
import Login from './components/Login'
import List from './components/List'

const App = (props) => {
    const isLoggedIn = props.isLoggedIn
    const [database, setDatabase] = useState(DB)
    const [data, setData] = useState(DB.acd.map(i => { if (i.userId === 2) return i }))
    console.log(data)
    const [a, setA] = useState(DB.acd.map(i => { if (i.userId === 1) return i.tasks }))
    console.log(a[0])

    if (isLoggedIn) {
        return (
            <div className='container'>
                {a[0].map(i => <span>{i.text}</span>)}
                <List tasks={database.list.tasks} completed={database.list.completed} />

                <div>
                    <span>from5jforever@gmail.com</span>
                    <h1>ЖУРНАЛ</h1>
                    <button>ДОБАВИТЬ</button>
                    <div>
                        SCROLL
                    </div>
                </div>


            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))