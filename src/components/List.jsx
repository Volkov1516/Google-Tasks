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

    const editTask = (id) => {
        alert(id)
        console.log(tasks)

        const updatedTasks = [...tasks].map((task) => {if(task.id === id) console.log('Finaly!')})  
    }

    const removeTask = (id) => {
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
                            <button className='lists-area__complete-btn'></button>

                            <span className='lists-area__input'>{i.task}</span>

                            <button className='lists-area__edit-btn' onClick={() => editTask(i.id)}></button>
                            <button className='lists-area__remove-btn' onClick={() => removeTask(i.id)} ></button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List

