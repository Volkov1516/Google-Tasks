import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './NewReducer'

import Header from './NewComponents/Header'
import Body from './NewComponents/Body'

const NewApp = () => {
    //Creating a Reducer
    const initialState = 0
    const [state, setState] = useReducer(reducer, initialState)

    //Requesting data with axios and putting it in state
    const [lists, setLists] = useState([])
    const [tasks, setTasks] = useState([])
    const [completed, setCompleted] = useState([])   
    useEffect(() => {
        axios.get('http://localhost:3002/lists').then(response => setLists(response.data))
        .then(() => axios.get('http://localhost:3002/tasks')).then(response => setTasks(response.data))
        .then(() => axios.get('http://localhost:3002/completed')).then(response => setCompleted(response.data))
    }, [])

    //This value is id of the current list. Depends on this value Body abble to select correct tasks and completed data
    const [idValue, setIdValue] = useState(2)
    const selectList = (id) => {
        lists.map((i) => {
            if(i.id === id){
                setIdValue(id)
            }
        })
    }
    
    return (
        <div>
            <Header lists={lists} selectList={selectList}/>
            <Body idValue={idValue} tasks={tasks} completed={completed} />
        </div>
    )
}

export default NewApp
