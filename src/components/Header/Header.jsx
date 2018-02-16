import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token) {
            console.log(token);
        }
    }
    render() {
        return (
            <header>
                {this.props.root.loggedIn ? (
                    <div className="right-content">
                        <Link href="/my" to="/my">
                            My Account
                        </Link>
                        <a>Log out</a>
                    </div>
                ) : (
                    <div className="right-content">
                        <Link href="/login" to="/login">
                            Login
                        </Link>
                        <Link href="/register" to="/register">
                            Register
                        </Link>
                    </div>
                )}

                <div className="left-content">
                    <Link href="/" to="/">
                        <h2>DiscussM</h2>
                    </Link>
                </div>
            </header>
        );
    }
}
