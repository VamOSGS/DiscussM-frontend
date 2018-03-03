import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    responseFacebook = (response) => {
        const {
            id, name, email, gender,
        } = response;
        const image = `https://graph.facebook.com/${id}/picture?width=500&height=500`;
        const user = {
            name,
            email,
            image,
            gender,
            fbid: id,
            username: '',
        };
        this.props.onCheck({ fbid: id }).then((fbLog) => {
            if (fbLog) {
                this.props.history.push({
                    pathname: '/set',
                    state: { user },
                });
            } else {
                this.props.onFbLogin({ fbid: id }).then((res) => {
                    if (res.success) {
                        this.props.history.push('/my');
                    }
                });
            }
        });
    };
    render() {
        return (
            <FacebookLogin
                appId="167320117226771"
                fields="name,email,gender"
                size="small"
                scope="public_profile"
                icon="fa-facebook"
                callback={this.responseFacebook}
            />
        );
    }
}
