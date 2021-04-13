import { useState } from 'react' 
import './App.css'

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [comments, setComment] = useState([])

    const addComment = () => {
        const newComment = inputValue
        setComment([newComment, ...comments])
        setInputValue('')   
        console.log(comments)
    }

    return (
        <div className='container'>
            <h1 className='list-name' >TASKS</h1>
            <input className='input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='add-task-btn' onClick={addComment} >Add a task</button>
            <div className='list'>
                <ul>
                    {comments.map(comment=> <li>{comment}</li>)}
                </ul>
            </div>
            <button className='show-completed-btn' >Completed</button>
        </div>
    )
}

export default App