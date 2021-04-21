import { useState } from 'react' 
import DB from './assets/db.json'
import './App.css'

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
            {/**Часть 1 */}
            <button className='list-name' >{DB.name}</button>
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

export default App