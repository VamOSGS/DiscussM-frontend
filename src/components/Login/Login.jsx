import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './Login.less';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errors: [],
            username: {
                value: '',
                err: ''
            },
            password: {
                value: '',
                err: ''
            }
        };
    }
    handleChange = prop => e => {
        const removedErr = this.state.errors;
        removedErr.pop();
        this.setState({
            errors: removedErr,
            [prop]: {
                value: e.target.value,
                err: ''
            }
        });
        if (
            this.props.validate.password !== '' ||
            this.props.validate.username !== ''
        ) {
            this.props.onFix(prop);
        }
    };
    validate() {
        const { username, password } = this.state;
        return new Promise(resolve => {
            if (!username.value) {
                this.setState({
                    errors: [...this.state.errors, 'username'],
                    username: { err: 'This field required' }
                });
            }
            if (!password.value) {
                this.setState({
                    errors: [...this.state.errors, 'password'],
                    password: { err: 'This field required' }
                });
            }
            resolve();
        });
    }
    handleSubmit(e) {
        const { username, password } = this.state;
        this.validate().then(() => {
            if (this.state.errors.length === 0) {
                this.props
                    .onLogin({
                        username: username.value,
                        password: password.value
                    })
                    .then(res => {
                        if (res.success) {
                            this.props.history.push('/my');
                        }
                    });
            }
        });
    }
    componentWillUnmount() {
        const { password, username } = this.props.validate;
        if (password !== '') {
            this.props.onFix('password');
        }
        if (username !== '') {
            this.props.onFix('username');
        }
    }
    render() {
        const { password, username } = this.state;
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="field"
                        value={username.text}
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange('username')}
                    />
                    {username.err ? (
                        <p className="err">{username.err}</p>
                    ) : null}
                    {this.props.validate.username ? (
                        <p className="err">{this.props.validate.username}</p>
                    ) : null}
                    <input
                        className="field"
                        value={password.text}
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange('password')}
                    />
                    {password.err ? (
                        <p className="err">{password.err}</p>
                    ) : null}
                    {this.props.validate.password ? (
                        <p className="err">{this.props.validate.password}</p>
                    ) : null}
                    <Button onClick={this.handleSubmit} variant="raised">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}
