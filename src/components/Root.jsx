import React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Login from './Login';
import Register from './Register';
import Header from './Header';
import Profile from './Profile';
import Home from './Home';
import SetUsername from './SetUsername';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1e3948' },
        secondary: { main: '#ffc107' },
    },
});
const Root = () => (
    <MuiThemeProvider theme={theme}>
        <div>
            <Header />
            <div className="b">
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/set" component={SetUsername} />
                <Route path="/my" render={() => <Profile my />} />

                <Route path="/" exact component={Home} />
                <Route path="/user/:username" render={() => <Profile my={false} />} />
            </div>
        </div>
    </MuiThemeProvider>
);

export default Root;
