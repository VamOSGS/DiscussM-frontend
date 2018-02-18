import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Profile from './Profile';
import Home from './Home';

const Root = () => (
    <div>
        <Header />
        <div className="b">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/my" render={props => <Profile my={true} />} />

            <Route path="/" exact component={Home} />
            <Route
                path="/user/:username"
                render={props => <Profile my={false} />}
            />
        </div>
    </div>
);

export default Root;
