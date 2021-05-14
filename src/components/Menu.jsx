import { useState } from 'react'
import DB from '../db.json'
/**
 * Редактировать JSON
 * Отобразить список листов в меню
 * В зависимости от выбранного листа, рендерить соответствующий список задач
 */
const Menu = () => {
    const [lists, setLists] = useState(DB.list)
    console.log(lists)
    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className='container__menu'>
            <button className='menu-btn' onClick={showMenu} >{DB.list.name}</button>
            <ul className='menu' style={isVisible ? { 'display': 'block' } : { 'display': 'none' }}>
                <li>Напоминания</li>
                <li>Проекты</li>
                <li>Книги</li>
                <li className='menu__create-new' >Создать новый список</li>
                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
        </div>
    )
}

export default Menu