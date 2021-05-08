import { useState } from 'react'
import DB from '../../db.json'

const List = () => {
    const [comments, setComment] = useState( DB.lists )
    const [inputValue, setInputValue] = useState('')
    const addComment = () => {
        const newComment = {task: inputValue}
        setComment([...comments, newComment])
        setInputValue('') 
    }

    return (
        <div>
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
        </div>
    )
}

export default List