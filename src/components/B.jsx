import {useState} from 'react'
const B = (props) => {

    return (
        <div>
            {props.newList ? props.newList.map(i => <ul>{i.tasks.map(j => <li>{j.text}</li>)}</ul>) : null}
        </div>
    )
}

export default B