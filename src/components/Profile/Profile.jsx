import React, { Component } from 'react';

export default class Profile extends Component {
    componentDidMount() {
        if (!this.props.root.isLogged) {
            this.props.history.push('/login');
        }
    }
    render() {
        const { username, age, gender, email, image } = this.props.root.user;
        return (
            <main>
                <h2>Username:{username}</h2>
                <h2>Age:{age}</h2>
                <h2>Gender:{gender}</h2>
                <h2>Email:{email}</h2>
            </main>
        );
    }
}
