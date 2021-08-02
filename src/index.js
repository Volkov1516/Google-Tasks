import ReactDOM from 'react-dom';
import { React } from 'react'

/*
const App = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/lists').then(resp => {
            setData(resp.data)
        })
    }, [setData])

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
        <div>
            <Menu data={data} getId={setId} creacteList={creacteList} activeListName={activeListName} removeList={removeList} />
            {data.map((i) => {
                if (i.id === activeList)
                    return <List tasks={i.tasks} completed={i.completed} />
            })}
        </div>
    )
}
*/

const App = () => {

    return (
        <div>
            
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))