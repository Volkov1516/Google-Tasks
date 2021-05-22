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
    const [a, setA] = useState(DB.acd.map(i => {if(i.userId === 1) return i.tasks}))
    console.log(a)

    if (isLoggedIn) {
        return (
            <div className='container'>
                {a[0].map(i => <span>{i.text}</span>)}
                <List tasks={database.list.tasks} completed={database.list.completed} />
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))