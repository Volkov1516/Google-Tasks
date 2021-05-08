import {React, useState} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './components/Login/Login'
import List from './components/List/List'
import Menu from './components/Menu/Menu'

const App = (props) => {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return (
            <div className='container'>
                <Menu />
                <List />
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true}/></BrowserRouter>, document.querySelector('#root'))