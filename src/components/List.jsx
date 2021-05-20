import { useState } from 'react'

const List = (props) => {
    const [tasks, setTasks] = useState(props.tasks)
    const [completed, setCompleted] = useState(props.completed)
    const [inputValue, setInputValue] = useState('')
    const [taskEditing, setTaskEditing] = useState(null)
    const [editInputValue, setEditInputValue] = useState('')
    const [isVisible, setIsVIsible] = useState(false)
    
    const addTask = () => {
        const newTask = { 
            id: new Date().getTime(), 
            task: inputValue 
        }
        setEditInputValue(inputValue)
        setTasks([newTask, ...tasks])
        setInputValue('')
    }

    const editTask = (id) => {  
        console.log(editInputValue)
        const updatedTasks = [...tasks].map((todo) => {if(todo.id === id){
            todo.task = editInputValue
            }  
            return todo    
        })
        setTasks(updatedTasks)
        setTaskEditing(null)    
    }

    const removeTask = (id) => {
        const updatedTasks = [...tasks].filter((task) => task.id !== id)
        setTasks(updatedTasks)
    } 

    const removeCompletedTask = (id) => {
        const updatedTasks = [...completed].filter((task) => task.id !== id)
        setCompleted(updatedTasks)
    } 

    const showCompleted = () => {
        setIsVIsible(!isVisible)
    }

    const completeTask = (id) => {
        const updatedTask = [...tasks].map((task) => {if(task.id === id) return task.task })
        const movedTask= {
            id: new Date().getTime(),
            task: updatedTask
        }
        setCompleted([movedTask, ...completed])

        const clearTask = [...tasks].filter((task) => task.id !== id)
        setTasks(clearTask)
    }

    const restoreTask = (id) => {
        const updatedTask = [...completed].map((task) => {if(task.id === id) return task.task})
        const movedTask = {
            id: id,
            task: updatedTask
        }
        setTasks([movedTask, ...tasks])
        
        const clearTask = [...completed].filter((task) => task.id !== id)
        setCompleted(clearTask)
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
            <div className='list__completed'>
                <button onClick={showCompleted} >Show completed</button>
                <ul style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                    {completed.map((i) => 
                        <li key={i.id}>
                            <button onClick={() => restoreTask(i.id)} >Restore</button>
                            <span>{i.task}</span>
                            <button className='completed__remove-btn' onClick={() => removeCompletedTask(i.id)} >Remove</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List

