import React from 'react'
import {Container, CssBaseline} from "@material-ui/core";

import TasksState from './context/TasksState';
import Toolbar from './components/Toolbar/Toolbar';
import List from './components/List/List';
import Input from "./components/Input/Input";

const App = () => {
    return (
        <>
            <TasksState>
                <Container maxWidth='sm'>
                    <CssBaseline/>

                    <Toolbar/>
                    <Input/>
                    <List/>
                </Container>
            </TasksState>
        </>
    )
}

export default App