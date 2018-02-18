import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Messages from '../Messages';
import SendMessage from '../SendMessage';
import './Profile.less';

export default class Profile extends Component {
    componentWillMount() {
        const username = this.props.match.params.username;
        const data = {
            username: this.props.user.user.username,
            id: this.props.user.user._id
        };
        if (this.props.my) {
            this.props.onGetMessages(data);
        } else {
            if (username === data.username) {
                this.props.history.push('/my');
            } else {
                this.props.onGetUserPage(username);
            }
        }
    }
    render() {
        if (this.props.my) {
            console.log(this.props.my);
            const {
                username,
                age,
                gender,
                email,
                image,
                name
            } = this.props.user.user;
            return (
                <main className="profile">
                    <div className="userinfo">
                        <div className="img">
                            <Avatar
                                src={`http://localhost:8000${image ||
                                    '/uploads/user-default.png'}`}
                            />
                        </div>

                        <h2 className="username">{username}</h2>
                        {name ? <p className="name"> {name} </p> : null}
                    </div>
                    <Messages />
                </main>
            );
        } else {
            const {
                username,
                age,
                gender,
                image,
                name,
                success
            } = this.props.userpage;
            if (success) {
                return (
                    <main className="profile">
                        <div className="userinfo">
                            <div className="img">
                                <Avatar src={`http://localhost:8000${image}`} />
                            </div>

                            <h2 className="username">{username}</h2>
                            {name ? <p className="name"> {name} </p> : null}
                        </div>
                        <SendMessage />
                    </main>
                );
            } else {
                return (
                    <main className="profile">
                        <h2>User not found!</h2>
                    </main>
                );
            }
        }
    }
}
