import React, { useContext } from "react";
import tasksContext from "../../context/tasks-context";

const Header = ({ lists, selectListId, createList, updateList, deleteList }) => {

    const { isVisible, toggleListMenu } = useContext(tasksContext)

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
                    <span onClick={() => selectListId(i.id)}>{i.title}</span>
                    <button onClick={() => updateList(i.id)}>Update</button>
                    <button onClick={() => deleteList(i.id)}>Delete</button>
                </div>)}
                {/**По нажатию должен создавать новый список */}
                <button onClick={() => createList()} >Create new list</button>
            </div>
        </div>
    )
}

export default Header
