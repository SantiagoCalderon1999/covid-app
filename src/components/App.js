import React from 'react';
import MenuBar from './MenuBar';
import TabMenu from './TabMenu';
import {ThemeProvider} from '@mui/material/styles';
import theme from './Theme';
class App extends React.Component{
    render(){
        return(
        <ThemeProvider theme={theme}>
            <div>
                <MenuBar/>
                <TabMenu/>
            </div>
        </ThemeProvider>
        );
    }
}

export default App;