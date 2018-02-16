import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginContainer from './Login';
import RegisterContainer from './Register';
import HeaderContainer from './Header';
import ProfileContainer from './Profile';

const Root = () => (
    <div>
        <HeaderContainer />
        <div className="b">
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/my" component={ProfileContainer} />
        </div>
    </div>
);
export default Root;
