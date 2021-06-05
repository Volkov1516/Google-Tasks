import {useState} from 'react'

function Menu() {
    const [isVisible, setIsVisible] = useState(false)
    const showLists = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button style={{display: 'block'}} onClick={showLists}>Select List</button>
            <div style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                <ul>
                    <li>Tasks</li>
                    <li>Books</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
