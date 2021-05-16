import { useState, useEffect } from 'react'
import DB from '../db.json'
/**
 * Создание нового списка
 * По клику на кнопку запускается функция
 * 
 */
const Menu = () => {
    const [newList, setNewList] = useState(DB.newList)

    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
        setIsVisible(!isVisible)
    }

    {/**
    ПРОБЛЕМА: При первом клике массив пустой! Но при втором уже заполняется...
    */}
    const createNweList = () => {
        const list = {
            id: 1,
            name: "My Tasks",
            tasks: [
                {
                    id: 1,
                    task: "Some task"
                }
            ],
            completed: [
                {
                    id: 1,
                    task: "Completed task"
                }
            ]
        }
        setNewList([...newList, list])
        console.log(newList)
    }

    return (
        <div className='container__menu'>
            <button className='menu-btn' onClick={showMenu} >{DB.list.name}</button>
            <ul className='menu' style={isVisible ? { 'display': 'block' } : { 'display': 'none' }}>
                <li>Книги</li>

                <button className='menu__create-new' onClick={createNweList} >Создать новый список</button>

                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
        </div>
    )
}

export default Menu