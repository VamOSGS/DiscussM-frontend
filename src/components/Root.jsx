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
            {/* <h1>Welcome to DiscussM!</h1> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/my" component={Profile} />
            <Route path="/" exact component={Home} />
        </div>
    </div>
);
export default Root;
