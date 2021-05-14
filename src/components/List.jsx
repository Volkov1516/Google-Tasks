import { useState } from 'react'
import DB from '../db.json'

const List = () => {
    const [tasks, setTasks] = useState(DB.tasks)
    const [inputValue, setInputValue] = useState('')
    const [taskEditing, setTaskEditing] = useState(null)
    const [editInputValue, setEditInputValue] = useState('')

    const addTask = () => {
        const newTask = { 
            id: new Date().getTime(), 
            task: inputValue 
        }
        setTasks([newTask, ...tasks])
        setInputValue('')
    }

    const completeTask = (id) => {
        const updatedTask = [...tasks].map((task) => {if(task.id === id) alert('Complete by Id:' + id)})
    }

    const editTask = (id) => {  
        const updatedTasks = [...tasks].map((todo) => {if(todo.id === id){
            todo.task = editInputValue
            }  
            return todo    
        })
        setTasks(updatedTasks)
        setTaskEditing(null)
        setEditInputValue('')
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
                            <button className='lists-area__complete-btn' onClick={() => completeTask(i.id)} >Complete</button>
                            {taskEditing === i.id ? (<input type="text" value={editInputValue} onChange={e => setEditInputValue(e.target.value)} />) : (<span className='lists-area__input'>{i.task}</span>)}         
                            {taskEditing === i.id ? (<button onClick={() => editTask(i.id)} >Submit edit</button>) : (<button className='lists-area__edit-btn' onClick={() => setTaskEditing(i.id)}>Edit</button>)}
                            <button className='lists-area__remove-btn' onClick={() => removeTask(i.id)} >Remove</button>  
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List

