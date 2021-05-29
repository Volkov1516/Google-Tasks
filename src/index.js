import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import List from './components/List'
import Header from './components/Header'

const App = (props) => {
    const isLoggedIn = props.isLoggedIn

    const [lists, setLists] = useState([
        {
            id: 1,
            name: "MyTasks"
        },
        {
            id: 2,
            name: "Projects"
        }
    ])
    const createNewList = () => {
        const newList = {
            id: "3",
            name: "New List"
        }
        setLists([...lists, newList])
    }

    if (isLoggedIn) {
        return (
            <div className='container'>
                <Header lists={lists} createNewList={createNewList}/>
                {lists.map(i => <List name={i.name} />)}
            </div>
        )
    }
    return (
        <Login />
    )
}

ReactDOM.render(<BrowserRouter><App isLoggedIn={true} /></BrowserRouter>, document.querySelector('#root'))