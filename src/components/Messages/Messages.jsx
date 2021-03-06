import React, { Component } from 'react';
import './Messages.less';

export default class Messages extends Component {
    render() {
        const { messages } = this.props;
        return (
            <div className="messages">
                <h3>Messages</h3>
                {messages.length === 0 ? (
                    <h3 className="no">No messages...</h3>
                ) : (
                    <ul>
                        {messages.map((el, uid) => (
                            <li key={uid}>
                                <p className="message">{el.message}</p>
                                <p className="date">{el.date}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}
