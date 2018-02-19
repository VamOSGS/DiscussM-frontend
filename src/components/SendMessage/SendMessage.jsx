import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './SendMessage.less';

export default class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                value: '',
                err: false
            }
        };
    }

    handleChange = param => e => {
        this.setState({ [param]: { value: e.target.value, err: false } });
    };

    handleSubmit = e => {
        if (this.state.message.value) {
            const time = new Date().toTimeString().split('');
            let mTime = '';
            time.map((item, key) => {
                if (key <= 7) {
                    mTime += item;
                }
            });
            const data = {
                to: {
                    username: this.props.userpage.username,
                    id: this.props.userpage.id
                },
                message: {
                    date: `${new Date().toDateString()}, ${mTime}`,
                    message: this.state.message.value
                }
            };
            this.props.onSend(data);
            console.log(data);
        } else {
            this.setState({ message: { err: true } });
        }
    };

    render() {
        const { message } = this.state;
        return (
            <div className="send">
                <h3>Send Message</h3>
                <form onSubmit={this.handleSubmit}>
                    {message.err ? (
                        <p className="err">You can't send empty message</p>
                    ) : null}
                    <textarea
                        value={message.value}
                        onChange={this.handleChange('message')}
                        cols="75"
                        rows="10"
                    />
                    <Button onClick={this.handleSubmit} variant="raised">
                        Send
                    </Button>
                </form>
            </div>
        );
    }
}
