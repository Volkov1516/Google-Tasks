import { useState } from 'react'

const Menu = ({data, selectTasks}) => {
    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
        setIsVisible(!isVisible)
    }
    
    return (
        <div className='container__menu'>
            <button className='menu-btn' onClick={showMenu} >Задачи</button>
            <ul className='menu' style={isVisible ? { 'display': 'block' } : { 'display': 'none' }}>
                {data.map(i => <li key={i.id} onClick={ selectTasks ? () => selectTasks(i.tasks) : null } >{i.title}</li>)}
                <button className='menu__create-new' >Создать новый список</button>
                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
        </div>
    )
}

export default Menu