import React, { Component } from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import FileUpload from 'material-ui-icons/FileUpload';
import IconButton from 'material-ui/IconButton';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Uploader from './Uploader';
import './Register.less';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            selectedFile: '',
            errors: [],
            image: '',
            username: {
                text: '',
                err: ''
            },
            name: {
                text: '',
                err: ''
            },
            gender: {
                text: '',
                err: ''
            },
            email: {
                text: '',
                err: ''
            },
            password: {
                text: '',
                err: ''
            },
            age: {
                text: '',
                err: ''
            }
        };
        this.state = this.initState;
    }
    onSubmit = e => {
        e.preventDefault();
        const {
            selectedFile,
            username,
            gender,
            email,
            password,
            age,
            image,
            name
        } = this.state;
        this.validate().then(() => {
            if (this.state.errors.length === 0) {
                const data = {
                    username: username.text,
                    name: name.text,
                    email: email.text,
                    password: password.text,
                    age: age.text,
                    image,
                    gender: gender.text
                };
                console.log(data);
                this.props.onRegister(data).then(d => {
                    this.setState(this.initState);
                    this.props.history.push('/my');
                });
            }
        });
    };

    validate(formData) {
        const { username, password, email, age, gender } = this.state;
        return new Promise(resolve => {
            if (username.text) {
                if (username.text.length < 2) {
                    this.setState({
                        errors: [...this.state.errors, 1],
                        username: {
                            text: username.text,
                            err: 'Too short username'
                        }
                    });
                }
            } else {
                this.setState({
                    errors: [...this.state.errors, 1],
                    username: { text: '', err: 'Username required' }
                });
            }

            if (email.text) {
                const isEmail = this.validateEmail();
                if (!isEmail) {
                    this.setState({
                        errors: [...this.state.errors, 1],
                        email: { text: email.text, err: 'Not valid Email!' }
                    });
                }
            } else {
                this.setState({
                    errors: [...this.state.errors, 1],
                    email: { text: '', err: 'Email required' }
                });
            }
            if (password.text) {
                if (password.text.length < 6) {
                    this.setState({
                        errors: [...this.state.errors, 1],
                        password: {
                            text: password.text,
                            err: 'Minimum lenght of password is 6'
                        }
                    });
                }
            } else {
                this.setState({
                    errors: [...this.state.errors, 1],
                    password: { text: '', err: 'Password required' }
                });
            }
            if (age.text) {
                const parse = age.text;
                const parsed = parseInt(parse, 10);
                if (parsed <= 15) {
                    this.setState({
                        errors: [...this.state.errors, 1],
                        age: { text: age.text, err: 'This service for 15+' }
                    });
                }
            } else {
                this.setState({
                    errors: [...this.state.errors, 1],
                    age: { text: '', err: 'Age required' }
                });
            }
            if (!gender.text) {
                this.setState({
                    errors: [...this.state.errors, 1],
                    gender: { text: '', err: 'Gender required' }
                });
            }
            resolve();
        });
    }

    validateEmail() {
        const emailReg = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return emailReg.test(String(this.state.email.text).toLowerCase());
    }

    inputChange = prop => event => {
        const removedErr = this.state.errors;
        removedErr.pop();
        this.setState({
            errors: removedErr,
            [prop]: { text: event.target.value, err: '' }
        });
        if (prop === 'username' || prop === 'email') {
            if (
                this.props.validate.email !== '' ||
                this.props.validate.username !== ''
            ) {
                this.props.onFix(prop);
            }
        }
    };
    genderSelect = (event, text) => {
        this.setState({ gender: { text } });
    };

    saveImage = info => {
        this.setState({ image: info.cdnUrl });
    };
    render() {
        const {
            username,
            password,
            email,
            age,
            gender,
            name,
            selectedFile,
            file
        } = this.state;
        return (
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="field"
                        value={username.text}
                        type="text"
                        onChange={this.inputChange('username')}
                        placeholder="Username*"
                        name="username"
                    />
                    {username.err ? (
                        <p className="err">{username.err}</p>
                    ) : null}
                    {this.props.validate.username ? (
                        <p className="err">{this.props.validate.username}</p>
                    ) : null}
                    <input
                        className="field"
                        value={name.text}
                        type="text"
                        onChange={this.inputChange('name')}
                        placeholder="Name"
                        name="name"
                    />
                    <input
                        className="field"
                        value={email.text}
                        type="text"
                        placeholder="Email*"
                        name="email"
                        onChange={this.inputChange('email')}
                    />
                    {email.err ? <p className="err">{email.err}</p> : null}
                    {this.props.validate.email ? (
                        <p className="err">{this.props.validate.email}</p>
                    ) : null}
                    <input
                        className="field"
                        onChange={this.inputChange('age')}
                        value={age.text}
                        type="number"
                        placeholder="Age*"
                        name="age"
                        min="15"
                        max="100"
                    />
                    {age.err ? <p className="err">{age.err}</p> : null}
                    <input
                        className="field"
                        value={password.text}
                        type="password"
                        onChange={this.inputChange('password')}
                        placeholder="Password*"
                        name="password"
                    />
                    {password.err ? (
                        <p className="err">{password.err}</p>
                    ) : null}

                    <div>
                        <p>
                            <label htmlFor="file">Your Image:</label>{' '}
                            <Uploader
                                id="images"
                                name="images"
                                data-images-only
                                onUploadComplete={this.saveImage}
                            />
                        </p>
                    </div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={gender.text}
                            onChange={this.genderSelect}
                            className="flex"
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                        </RadioGroup>
                    </FormControl>
                    {gender.err ? <p className="err">{gender.err}</p> : null}
                    <Button
                        className="mBtn"
                        onClick={this.onSubmit}
                        variant="raised"
                        color="primary"
                    >
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}
