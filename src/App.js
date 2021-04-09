import './App.css'

const App = () => {
    return (
        <div>
            <h1>TASKS</h1>
            <button style={{color: 'blue'}}>Add a task</button>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
            <button style={{color: 'gray'}}>Completed</button>
        </div>
    )
}

export default App