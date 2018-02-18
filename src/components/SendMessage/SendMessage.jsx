import React, { Component } from 'react';
import './SendMessage.less';

export default class SendMessage extends Component {
    render() {
        return (
            <div className="send">
                <h3>Send Message</h3>
                <form action="">
                    <textarea name="" id="" cols="30" rows="10" />
                </form>
            </div>
        );
    }
}
