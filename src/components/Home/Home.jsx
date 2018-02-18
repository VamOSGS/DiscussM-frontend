import React, { Component } from 'react';
import './Home.less';

export default class Home extends Component {
    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/my');
        }
    }
    render() {
        return (
            <div className="home">
                <h1>
                    Welcome To <span>DiscussM</span>!
                </h1>
            </div>
        );
    }
}
