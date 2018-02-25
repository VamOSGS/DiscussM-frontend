import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountCircle from 'material-ui-icons/AccountCircle';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import jwtDecode from 'jwt-decode';
import './Header.less';

export default class Header extends Component {
    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token) {
            const data = { token, user: jwtDecode(token).user };
            this.props.onSetUser(data);
        }
    }
    render() {
        return (
            <header>
                {this.props.user.loggedIn ? (
                    <div className="right-content">
                        <Link href="/my" to="/my">
                            <IconButton aria-haspopup="true" color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </Link>
                        <Link onClick={this.props.onLogOut} href="/" to="/">
                            <Button style={{ color: 'white' }}>Log out</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="right-content">
                        <Link href="/login" to="/login">
                            <Button style={{ color: 'white' }}>Login</Button>
                        </Link>

                        <Link href="/register" to="/register">
                            <Button style={{ color: 'white' }}>Register</Button>
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
