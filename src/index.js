import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import Login from './components/Login'
import List from './components/List'
import Menu from './components/Menu'
/**
 * Реализовать функцию множества списков(добавление, редактирование, удаление, отображение)
 * Реализовать функцию регистрации и входа/выхода
 * Реализовать JSON-server и AJAX-запросы
 */
const App = (props) => {
    const isLoggedIn = props.isLoggedIn

    if (isLoggedIn) {
        return (
            <div className='container'>
                <Menu />    
                <List />
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))