import { useState } from 'react'

const Menu = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className='container__menu'>
            <button className='menu-btn' onClick={showMenu} >{props.name}</button>
            <ul className='menu' style={isVisible ? { 'display': 'block' } : { 'display': 'none' }}>
                <li>Книги</li>

                <button className='menu__create-new'  >Создать новый список</button>

                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
        </div>
    )
}

export default Menu