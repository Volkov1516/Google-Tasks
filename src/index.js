import { React, useState, useReducer } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DB from './db.json'
import reduser from './reduser'

import List from './components/List'
import Menu from './components/Menu'
/** 
 * Подключение JSONserver
 * Добавление стилей(Изучить соответствующие библиотеки)
 * use Reduser
 */
const App = () => {
    const [data, setData] = useState(DB)

    const [activeList, setActiveList] = useState(1)
    const [activeListName, setActiveListName] = useState('Default list')
    const setId = (id, name) => {
        setActiveList(id)
        setActiveListName(name)
    }

    const creacteList = () => {
        const listName = window.prompt("Create a name:")
        const updatedList = {
            id: data.length + 1,
            name: listName,
            tasks: [],
            completed: []
        }
        setData([...data, updatedList])
    }

    const removeList = (id) => {
        const updatedList = [...data].filter(i => i.id != id)
        setData(updatedList)
    }

    
    return (
        <div className='container'>
            <Menu data={data} getId={setId} creacteList={creacteList} activeListName={activeListName} removeList={removeList} />
            {data.map((i) => {
                if(i.id === activeList)
                    return <List tasks={i.tasks} completed={i.completed}/>
            })}
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'))