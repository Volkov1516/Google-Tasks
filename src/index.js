import ReactDOM from 'react-dom';
import React from 'react'

import TasksState from './context/TasksState';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

const App = () => {
    return (
        <div>
            <TasksState>
                <Header />
                <Body />
            </TasksState>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))

