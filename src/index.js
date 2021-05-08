import {React, useState} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, NavLink } from 'react-router-dom'
import Login from './components/Login/Login'

import DB from './db.json'
import './index.css'

const App = (props) => {
    const [comments, setComment] = useState( DB.lists )

    const [inputValue, setInputValue] = useState('')
    const addComment = () => {
        const newComment = {task: inputValue}
        setComment([...comments, newComment])
        setInputValue('') 
    }
    
    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
            setIsVisible(!isVisible)
    }

    /**
     * Удаление задачи:
     * 1. Узнать id текущего элемента
     * 2. Удалить задачу по id
     */

    const removeItem = () => {
        comments.splice(0, 1)
    }
    console.log(comments)
    
    

    const isLoggedIn = props.isLoggedIn

    if(isLoggedIn){
        return (
            <div className='container'>
            <button className='menu-btn'  onClick={showMenu} >{DB.name}</button>
            <ul className='menu' style={isVisible ? {'display': 'block'} : {'display': 'none'}}>
                <li>Напоминания</li>
                <li>Проекты</li>
                <li>Книги</li>
                <li className='menu__create-new' >Создать новый список</li>
                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
            <input className='input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='add-task-btn' onClick={addComment} >Add a task</button>
            <div className='list'>
                <ul>
                    {comments.map(comment => 
                        <li>
                            {comment.task}
                            <button onClick={removeItem}>complete</button>
                        </li>
                    )}
                </ul>
            </div>
            <button className='show-completed-btn'>Completed</button>
        </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter> <App isLoggedIn={true} /> </BrowserRouter>, document.querySelector('#root'))