import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';
import Messages from '../Messages';
import SendMessage from '../SendMessage';
import './Profile.less';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            defaultImage:
                'https://ucarecdn.com/84054e53-0725-4f21-876a-5a6a8b3744f1/iconuserdefault.png',
            notFound: false,
        };
    }

    componentDidMount() {
        const { username } = this.props.match.params;
        const data = {
            username: this.props.user.user.username,
            id: this.props.user.user._id,
        };
        if (this.props.my) {
            this.props.onGetMessages(data).then((res) => {
                if (res.success === true) {
                    setTimeout(() => {
                        this.setState({ loading: false });
                    }, 500);
                }
            });
        } else if (username === data.username) {
            this.props.history.push('/my');
        } else {
            this.props.onGetUserPage(username).then((res) => {
                if (res.success === true) {
                    this.setState({ notFound: res.notFound });
                    setTimeout(() => {
                        this.setState({ loading: false });
                    }, 500);
                }
            });
        }
    }
    render() {
        if (this.props.my) {
            const {
                username, age, gender, email, image, name,
            } = this.props.user.user;
            if (this.state.loading) {
                return (
                    <main className="profile">
                        <CircularProgress color="secondary" className="loader" />
                    </main>
                );
            }
            return (
                <main className="profile">
                    <div className="userinfo">
                        <div className="img">
                            <Avatar src={image || this.state.defaultImage} />
                        </div>

                        <h2 className="username">{username}</h2>
                        {name ? <p className="name"> {name} </p> : null}
                    </div>
                    <Messages />
                </main>
            );
        }
        const {
            username, age, gender, image, name, notFound, success,
        } = this.props.userpage;
        if (notFound) {
            return (
                <main className="profile">
                    <h2>User not found!</h2>
                </main>
            );
        }
        if (this.state.loading) {
            return (
                <main className="profile">
                    <CircularProgress color="secondary" className="loader" />
                </main>
            );
        } else if (success) {
            return (
                <main className="profile">
                    <div className="userinfo">
                        <div className="img">
                            <Avatar src={image || this.state.defaultImage} />
                        </div>

                        <h2 className="username">{username}</h2>
                        {name ? <p className="name"> {name} </p> : null}
                    </div>
                    <SendMessage />
                </main>
            );
        }
    }
}
