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
        setComment([newComment, ...comments])
        setInputValue('')   
    }

    const [isVisible, setIsVisible] = useState('none')
    const showMenu = () => {
        setIsVisible('block')
    }

    const isLoggedIn = props.isLoggedIn

    if(isLoggedIn){
        return (
            <div className='container'>
            <button className='menu-btn'  onClick={showMenu} >{DB.name}</button>
            <ul className='menu' style={{display: `${isVisible}`}}>
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
                            <button>complete</button>
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

ReactDOM.render(<BrowserRouter> <App isLoggedIn={false} /> </BrowserRouter>, document.querySelector('#root'))