import {useState, useReducer} from 'react'
import reducer from '../reducer'

function Menu({data, getId, creacteList, activeListName, removeList}) {
    const [isVisible, dispatch] = useReducer(reducer, false)

    return (
        <div className='menu'>
            <button className='menu__menu-btn'  onClick={() => dispatch('showList')}>{activeListName}</button>
            <div className='menu__dropdown' style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                <ul>
                    {data.map(i => <li className='menu__item-name' onClick={() => getId(i.id, i.name)}>{i.name}
                        <button className='menu__item-btn' onClick={() => removeList(i.id)}>remove</button>
                    </li>)}
                    <button className='dropdown__create-btn' onClick={() => creacteList()}>Creacte a new</button>
                </ul>
            </div>
        </div>
    )
}

export default Menu
