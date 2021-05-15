import { useState } from 'react'
import DB from '../db.json'

const Menu = () => {
    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
        setIsVisible(!isVisible)
    }

    const showList = (id, tasks) => {
        console.log(tasks)
    } 

    return (
        <div className='container__menu'>
            <button className='menu-btn' onClick={showMenu} >{DB.list.name}</button>
            <ul className='menu' style={isVisible ? { 'display': 'block' } : { 'display': 'none' }}>
                {DB.menu.map(i => 
                    <li  key={i.id} onClick={() => showList(i.id, i.tasks)}>
                        {i.name}
                    </li>
                )}
                <li>Книги</li>
                <li className='menu__create-new' >Создать новый список</li>
                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
        </div>
    )
}

export default Menu