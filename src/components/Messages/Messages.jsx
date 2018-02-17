import React, { Component } from 'react';
import './Messages.less';

export default class Messages extends Component {
    render() {
        console.log(this.props);
        const { messages } = this.props;
        return (
            <div className="messages">
                <h3>Messages</h3>
                <ul>
                    {messages.map((el, uid) => (
                        <li key={uid}>
                            <p className="message">{el.message}</p>
                            <p className="date">{el.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
