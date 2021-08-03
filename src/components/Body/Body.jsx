const Body = ({ tasks, taskInputValue, setTaskInputValue, createTask, updateTask, deleteTask,  completeTask}) => {
    return (
        <div>
            <div>
                <input value={taskInputValue} onChange={e => setTaskInputValue(e.target.value)}/>
                <button onClick={() => createTask()}>Submit</button>
            </div>
            <div>
                {tasks.map((i) => {
                    if(!i.completed) {
                        return <div key={i.id}>
                            <button onClick={() => completeTask(i.id)}>Complete</button>
                            {i.text}
                            <button onClick={() => updateTask(i.id)} >Update</button>
                            <button onClick={() => deleteTask(i.id)} >Delete</button>
                        </div>
                    }
                })}
            </div>
            <div>
                <button>Show Completed</button>
                {tasks.map((i) => {
                    if(i.completed) {
                        return <div key={i.id}>
                            <button onClick={() => completeTask(i.id)}>Restore</button>
                            {i.text}
                            <button onClick={() => deleteTask(i.id)}>Delete</button>
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default Body
