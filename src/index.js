import { React } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import List from './components/List'
import Menu from './components/Menu'

const App = () => {
        return (
            <div className='container'>
                <Menu />
                <List />
            </div>
        )
    }

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'))