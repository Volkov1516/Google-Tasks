import {useState} from 'react'

function Header({lists, createNewList}) {
    const [isVisible, setIsVisible] = useState(false)
    const showLists = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button style={{display: 'block'}} onClick={showLists}>Select List</button>
            <div style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                <ul>
                    {lists.map(i => <li>{i.name}</li>)}
                    <button onClick={() => createNewList()} >Create new list</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
