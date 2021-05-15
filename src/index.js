import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import DB from './db.json'

import Login from './components/Login'
import List from './components/List'
import Menu from './components/Menu'

const App = (props) => {
    const isLoggedIn = props.isLoggedIn

    const [show, setShow] = useState(false)

    const selectList = (id) => {
        const selectedName = DB.listArr.map(i => {if(i.id === id){
            
        }})
        
    }

    if (isLoggedIn) {
        return (
            <div className='container'>
                <Menu />    
                <List />

                {/**
                 * Рендер свойств объекта внутри массива
                 */}
                <h2>(MENU)Name of lists:</h2>
                {DB.listArr.map(i => <button onClick={() => selectList(i.id)} >{i.listNameVal}</button>)}
                {/**
                 * Рендер свойств объектов внутри массива, который является свойством объекта из верхнего массива
                 */}
                <h2>Values of the list:</h2>
                {DB.listArr.map(i => <span>{i.taskArr.map(i => <span>{i.taskNameVal}</span>)}</span>)}

                 {show === true ? (<div onClick={()=> setShow(false)} >Показанно</div>) : (<div onClick={()=> setShow(true)} >Скрыто</div>)}

            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))