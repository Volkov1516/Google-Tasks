import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import DB from './db.json'
import Login from './components/Login'
import List from './components/List'

const App = (props) => {
    const isLoggedIn = props.isLoggedIn
    const [database, setDatabase] = useState(DB)

    if (isLoggedIn) {
        return (
            <div className='container'>
                <List tasks={database.list.tasks} completed={database.list.completed} />
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))