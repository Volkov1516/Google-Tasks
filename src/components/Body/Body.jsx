import React, {useContext} from "react";
import tasksContext from "../../context/tasks-context";

const Body = () => {

    const { tasks, listIdValue, isVisibleCompleted2, showCompleted2, taskInputValue2, setTaskInputValue2, createTask2, updateTask2, deleteTask2, completeTask2 } = useContext(tasksContext)

    return (
        <div>
            <div>
                <input value={taskInputValue2} onChange={e => setTaskInputValue2(e.target.value)} />
                <button onClick={() => createTask2()}>Submit</button>
            </div>
            <div>
                {tasks.map((i) => {
                    if (i.listID === listIdValue && !i.completed) {
                        return <div key={i.id}>
                            <button onClick={() => completeTask2(i.id)}>Complete</button>
                            {i.text}
                            <button onClick={() => updateTask2(i.id)} >Update</button>
                            <button onClick={() => deleteTask2(i.id)} >Delete</button>
                        </div>
                    }
                })}
            </div>
            <div>
                <button onClick={showCompleted2}>Show Completed</button>
                <div style={isVisibleCompleted2 ?  ({display: 'block'}) : ({display: 'none'})}>
                    {tasks.map((i) => {
                        if (i.listID === listIdValue && i.completed) {
                            return <div key={i.id}>
                                <button onClick={() => completeTask2(i.id)}>Restore</button>
                                {i.text}
                                <button onClick={() => deleteTask2(i.id)}>Delete</button>
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body
