import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import List from './components/List'
import Menu from './components/Menu'

const App = () => {
    const [data, setData] = useState([
        {
            id: 1,
            tasks: [
                {
                    id: 1,
                    task: "ID 1"
                }
            ],
            completed: []
        },
        {
            id: 2,
            tasks: [
                {
                    id: 2,
                    task: "ID 2"
                }
            ],
            completed: []
        }
    ])

    const [activeList, setActiveList] = useState(1)
    const setId = (id) => {
        setActiveList(id)
    }

    const creacteList = () => {
        const updatedList = {
            id: data.length + 1,
            tasks: [
                {
                    id: 3,
                    task: "ID 3"
                }
            ],
            completed: []
        }
        setData([...data, updatedList])
    }

    return (
        <div className='container'>
            <Menu data={data} getId={setId} creacteList={creacteList}/>
            {data.map((i) => {
                if(i.id === activeList)
                    return <List tasks={i.tasks} completed={i.completed}/>
            })}
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'))