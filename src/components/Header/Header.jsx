import React, { useContext } from "react";
import tasksContext from "../../context/tasks-context";

const Header = () => {

    const { lists, isVisible, toggleListMenu, selectList, createList2, updateList2, deleteList2 } = useContext(tasksContext)

    return (
        <div>
            <div>
                {/**Должен отображаться название текущего списка */}
                <h1>List Title</h1>
                {/**Должен скрывать меню и иметь вид в виде треугольника */}
                <button onClick={() => toggleListMenu()} >show menu btn</button>
            </div>
            <div style={isVisible ?  ({display: 'block'}) : ({display: 'none'})}>
                {lists.map(i => <div key={i.id}>
                    <span onClick={() => selectList(i.id)}>{i.title}</span>
                    <button onClick={() => updateList2(i.id)}>Update</button>
                    <button onClick={() => deleteList2(i.id)}>Delete</button>
                </div>)}
                {/**По нажатию должен создавать новый список */}
                <button onClick={() => createList2()}>Create new list</button>
            </div>
        </div>
    )
}

export default Header
