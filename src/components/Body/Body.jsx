const Body = ({ tasks, isVisibleCompleted, listIdValue, showCompleted, taskInputValue, setTaskInputValue, createTask, updateTask, deleteTask, completeTask }) => {
    return (
        <div>
            <div>
                <input value={taskInputValue} onChange={e => setTaskInputValue(e.target.value)} />
                <button onClick={() => createTask()}>Submit</button>
            </div>
            <div>
                {tasks.map((i) => {
                    if (i.listID === listIdValue && !i.completed) {
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
                <button onClick={showCompleted}>Show Completed</button>
                <div style={isVisibleCompleted ?  ({display: 'block'}) : ({display: 'none'})}>
                    {tasks.map((i) => {
                        if (i.listID === listIdValue && i.completed) {
                            return <div key={i.id}>
                                <button onClick={() => completeTask(i.id)}>Restore</button>
                                {i.text}
                                <button onClick={() => deleteTask(i.id)}>Delete</button>
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body
