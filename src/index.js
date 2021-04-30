import {React, useState} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import DB from './db.json'
import './index.css'

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [comments, setComment] = useState( DB.lists )

    const addComment = () => {
        const newComment = {task: inputValue}
        setComment([newComment, ...comments])
        setInputValue('')   
    }

    const [isVisible, setIsVisible] = useState('none')

    const showMenu = () => {
        setIsVisible('block')
    }

    return (
        <div className='container'>
            {/**Часть 1 */}
            <button className='menu-btn'  onClick={showMenu} >{DB.name}</button>
            <ul className='menu' style={{display: `${isVisible}`}}>
                <li>Напоминания</li>
                <li>Проекты</li>
                <li>Книги</li>
                <li className='menu__create-new' >Создать новый список</li>
                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
            {/**Часть 2 */}
            <input className='input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='add-task-btn' onClick={addComment} >Add a task</button>
            {/**Часть 3 */}
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
            {/**Часть 4 */}
            <button className='show-completed-btn'>Completed</button>
        </div>
    )
}

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.querySelector('#root'))