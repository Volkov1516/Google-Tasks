const A = (props) => {
    return (
        <div>
            <ul>
                {props.list.map(i => <li onClick={ props.changeList ? () => props.changeList(i) : null} >{i.name}</li>)}
            </ul>
        </div>
    )
}

export default A