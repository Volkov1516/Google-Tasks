import { useState } from 'react'

const Menu = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const showMenu = () => {
        setIsVisible(!isVisible)
    }

    const [currentList, setCurrentList] = useState(null)

    {/**ПРОБЛЕМА: При первом клике передается пустой массив */}
    const show = () => {
        const newL = props.Lists[0].tasks.map(i => <p>{i.task}</p>)
        setCurrentList(newL)
        console.log(currentList)
    }

    return (
        <div className='container__menu'>
            <button className='menu-btn' onClick={showMenu} >{props.name}</button>
            <ul className='menu' style={isVisible ? { 'display': 'block' } : { 'display': 'none' }}>
                {props.Lists.map(i => <li key={i.id} >{i.name}</li>)}
                <div>{props.Lists[0].tasks.map(i => <p>{i.task}</p>)}</div>
                <button onClick={show} >Показать</button>
                <button className='menu__create-new'  >Создать новый список</button>
                <li className='menu__user' >mymail@mail.com</li>
                <li className='menu__info' >Инфо</li>
            </ul>
        </div>
    )
}

export default Menu