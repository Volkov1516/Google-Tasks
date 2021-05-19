import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import DB from './db.json'
import Login from './components/Login'
import List from './components/List'
import Menu from './components/Menu'

const App = (props) => {
    const [database, setDatabase] = useState(DB)

    const isLoggedIn = props.isLoggedIn

    if (isLoggedIn) {
        return (
            <div className='container'>
                <Menu name={database.list.name} />    
                <List tasks={database.list.tasks} completed={database.list.completed}/>
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))