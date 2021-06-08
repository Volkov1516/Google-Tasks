import {useState} from 'react'

function Menu({data, getId, creacteList, activeListName, removeList}) {
    const [isVisible, setIsVisible] = useState(false)
    const showLists = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button style={{display: 'block'}} onClick={showLists}>{activeListName}</button>
            <div style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                <ul>
                    {data.map(i => <li onClick={() => getId(i.id, i.name)}>{i.name}
                        <button>Edit</button>
                        <button onClick={() => removeList(i.id)}>Remove</button>
                    </li>)}
                    <button onClick={() => creacteList()}>Creacte a new</button>
                </ul>
            </div>
        </div>
    )
}

export default Menu
