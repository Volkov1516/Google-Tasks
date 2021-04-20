import { useState } from 'react' 
import { Redirect, Route } from 'react-router-dom'
import './App.css'
import DB from './assets/db.json'
import Button from './components/Button/Button'
import Login from './components/Login/Login'

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [comments, setComment] = useState( DB.lists )

    const addComment = () => {
        const newComment = {task: inputValue}
        setComment([newComment, ...comments])
        setInputValue('')   
    }

    const btnObj = {
        text: 'complete',
        bacgroundColor: 'orange'
    }

    return (
        <div className='container'>
            <Route path='/login' component={Login}/>

            <Button text={btnObj.text} bacgroundColor={btnObj.bacgroundColor} />

            <h1 className='list-name' >TASKS</h1>
            <input className='input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='add-task-btn' onClick={addComment} >Add a task</button>
            <div className='list'>
                <ul>
                    {comments.map(comment => 
                        <li>
                            {comment.task}
                            <Button text={btnObj.text} bacgroundColor={btnObj.bacgroundColor}/>
                        </li>
                    )}
                </ul>
            </div>
            <button className='show-completed-btn' >Completed</button>
        </div>
    )
}

export default App