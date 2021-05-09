import { useState } from 'react'
import DB from '../../db.json'
/**
 * Довести до идела! 
 * 1. Input и Add: Верстка + функционал 
 * 2. TaskItem: Верстка + функционал(удаление и редактирование)
 * 3. JSON server 
 */
const List = () => {
    const [tasks, setTask] = useState( DB.tasks )

    const [inputValue, setInputValue] = useState('')

    const addTask = () => {
        const id = tasks.length
        const newTask = {id, task: inputValue}
        setTask([newTask, ...tasks])
        setInputValue('') 
    }

    return (
        <div>
            <input className='input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='add-task-btn' onClick={addTask} >Add</button>
            <div className='list'>
                <ul>
                    {tasks.map((i, index) =>
                        <li key={i.id}>
                            <button onClick={() => tasks.splice(index, 1)} >delete</button>
                            <input type="text"  value={i.task} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List

