import {Container, CssBaseline} from "@material-ui/core";

import State from './context/state';
import Toolbar from './components/Toolbar/Toolbar';
import Input from "./components/Input/Input";
import List from './components/List/List';


const App = () => {
    return (
        <>
            <State>
                <Container maxWidth='sm'>
                    <CssBaseline/>

                    <Toolbar/>
                    <Input/>
                    <List/>
                </Container>
            </State>
        </>
    )
}

export default App