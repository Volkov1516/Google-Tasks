import { useState } from 'react'
import DB from '../db.json'

const List = () => {
    const [tasks, setTask] = useState(DB.tasks)
    const [inputValue, setInputValue] = useState('')
    const addTask = () => {
        const id = tasks.length
        const newTask = { id, task: inputValue }
        setTask([newTask, ...tasks])
        setInputValue('')
    }

    return (
        <div className="container__list">
            <div className='list__control-panel'>
                <input className='control-panel__input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button className='control-panel__add-task-btn' onClick={addTask} >Add</button>
            </div>
            <div className='list__lists-area'>
                <ul>
                    {tasks.map((i, index) =>
                        <li key={i.id}>
                            <button className='lists-area__remove-btn' onClick={() => tasks.splice(index, 1)} ></button>
                            <input className='lists-area__input' type="text" value={i.task} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List

