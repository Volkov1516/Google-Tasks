import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import List from './components/List'
import Menu from './components/Menu'
/**
 * 3. Полная реализация кнопки добавления списков
 * 4. Функция переименования списка 
 * 5. Упаковка данных в JSON и подключение JSONserver
 * 6. useReduser?
 * 7. TypeScript?
 * 8. Добавление стилей(Изучить соответствующие библиотеки)
 */
const App = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "(id: 1) Мои задачи",
            tasks: [
                {
                    id: 1,
                    task: "(id: 1) Завершить проект"
                },
                {
                    id: 2,
                    task: "(id: 1) Купить новый дневник"
                }
            ],
            completed: []
        },
        {
            id: 2,
            name: "(id: 2) Покупки",
            tasks: [
                {
                    id: 2,
                    task: "(id: 2)Купить одежду"
                }
            ],
            completed: []
        }
    ])

    const [activeList, setActiveList] = useState(1)
    const [activeListName, setActiveListName] = useState('Выберите список')
    const setId = (id, name) => {
        setActiveList(id)
        setActiveListName(name)
    }

    const creacteList = () => {
        const updatedList = {
            id: data.length + 1,
            name: "Новый список",
            tasks: [
                {
                    id: 3,
                    task: "ID 3"
                }
            ],
            completed: []
        }
        setData([...data, updatedList])
    }

    const removeList = (id) => {
        const updatedList = [...data].filter(i => i.id != id)
        setData(updatedList)
    }

    
    return (
        <div className='container'>
            <Menu data={data} getId={setId} creacteList={creacteList} activeListName={activeListName} removeList={removeList} />
            {data.map((i) => {
                if(i.id === activeList)
                    return <List tasks={i.tasks} completed={i.completed}/>
            })}
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'))