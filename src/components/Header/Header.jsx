import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountCircle from 'material-ui-icons/AccountCircle';
import IconButton from 'material-ui/IconButton';
import jwtDecode from 'jwt-decode';
import './Header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token) {
            const data = { token, user: jwtDecode(token).user };
            this.props.onSetUser(data);
            this.props.history.push('/my');
        }
    }
    render() {
        return (
            <header>
                {this.props.root.loggedIn ? (
                    <div className="right-content">
                        <Link href="/my" to="/my">
                            <IconButton
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Link>
                        <Link onClick={this.props.onLogOut} href="/" to="/">
                            Log out
                        </Link>
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
