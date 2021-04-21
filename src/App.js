import { useState } from 'react' 
import { Redirect, Route } from 'react-router-dom'
import './App.css'
import DB from './assets/db.json'

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [comments, setComment] = useState( DB.lists )

    const addComment = () => {
        const newComment = {task: inputValue}
        setComment([newComment, ...comments])
        setInputValue('')   
    }

    return (
        <div className='container'>
            <h1 className='list-name' >{DB.name}</h1>
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

export default App