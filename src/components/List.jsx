import { useState } from 'react'
import DB from '../db.json'

const List = () => {
    const [tasks, setTasks] = useState(DB.tasks)
    const [inputValue, setInputValue] = useState('')

    const addTask = () => {
        const newTask = { 
            id: new Date().getTime(), 
            task: inputValue 
        }
        setTasks([newTask, ...tasks])
        setInputValue('')
    }

    const deleteTask = (id) => {
        const updatedTasks = [...tasks].filter((task) => task.id !== id)
        setTasks(updatedTasks)
    } 
    
    return (
        <div className="container__list">
            <div className='list__control-panel'>
                <input className='control-panel__input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button className='control-panel__add-task-btn' onClick={addTask} >Add</button>
            </div>
            <div className='list__lists-area'>
                <ul>
                    {tasks.map((i) =>
                        <li key={i.id}>
                            <button className='lists-area__remove-btn' onClick={() => deleteTask(i.id)} ></button>
                            <input className='lists-area__input' type="text" value={i.task} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List

