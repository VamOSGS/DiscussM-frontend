import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './SetUsername.less';

export default class SetUsername extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            username: {
                value: '',
                err: '',
            },
        };
    }
    componentWillMount() {
        if (!this.props.location.state) {
            this.props.history.push('/');
        }
    }
    validate() {
        const { username } = this.state;
        return new Promise((resolve) => {
            if (!username.value) {
                this.setState({
                    errors: [...this.state.errors, 'username'],
                    username: { err: 'This field required' },
                });
            }
            resolve();
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.validate().then(() => {
            const { user } = this.props.location.state;
            if (this.state.errors.length === 0) {
                user.username = this.state.username.value;
                this.props.onAuth(user).then((res) => {
                    if (res.success) {
                        this.props.history.push('/my');
                    }
                });
            }
        });
    };
    handleChange = prop => (e) => {
        const removedErr = this.state.errors;
        removedErr.pop();
        this.setState({
            errors: removedErr,
            [prop]: {
                value: e.target.value,
                err: '',
            },
        });
        if (this.props.validate.password !== '' || this.props.validate.username !== '') {
            this.props.onFix(prop);
        }
    };
    render() {
        const { username } = this.state;
        const {
            name, image, email, gender,
        } = this.props.location.state.user;
        return (
            <div className="set">
                <ul>
                    <li>
                        <img src={image} style={{ width: 100, height: 100 }} alt="fb" />
                    </li>
                    <li> Name: {name} </li>
                    {email && <li> Email: {email} </li>}
                    {gender && <li> Gender: {gender} </li>}
                    <li> Username: {username.value} </li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    {username.err && <p className="err">{username.err}</p>}
                    {this.props.validate.username && (
                        <p className="err">{this.props.validate.username}</p>
                    )}
                    <input
                        className="field"
                        value={username.value}
                        type="test"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange('username')}
                    />
                    <Button onClick={this.handleSubmit} color="primary" variant="raised">
                        Set Username
                    </Button>
                </form>
            </div>
        );
    }
}
