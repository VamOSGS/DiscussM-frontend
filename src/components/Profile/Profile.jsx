import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Messages from '../Messages';
import './Profile.less';

export default class Profile extends Component {
    componentDidMount() {
        // if (!this.props.root.isLogged) {
        //     this.props.history.push('/login');
        // }

        const data = {
            username: this.props.root.user.username,
            id: this.props.root.user._id
        };
        this.props.onGetMessages(data);
    }
    render() {
        const {
            username,
            age,
            gender,
            email,
            image,
            name
        } = this.props.root.user;
        return (
            <main className="profile">
                <div className="userinfo">
                    <div className="img">
                        <Avatar
                            src={`http://localhost:8000${
                                image ? image : '/uploads/user-default.png'
                            }`}
                        />
                    </div>

                    <h2 className="username">{username}</h2>
                    {name ? <p className="name"> {name} </p> : null}

                    {/* <h2>Age: {age}</h2>
                    <h2>Gender: {gender}</h2>
                    <h2>Email: {email}</h2> */}
                </div>
                <Messages />
            </main>
        );
    }
}
