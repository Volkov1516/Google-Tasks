import {useState} from 'react'

function Menu({data, getId, creacteList}) {
    const [isVisible, setIsVisible] = useState(false)
    const showLists = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button style={{display: 'block'}} onClick={showLists}>Select List</button>
            <div style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                <ul>
                    {data.map(i => <li onClick={() => getId(i.id)}>{i.id}</li>)}
                    <button onClick={() => creacteList()}>Create a new list</button>
                </ul>
            </div>
        </div>
    )
}

export default Menu
