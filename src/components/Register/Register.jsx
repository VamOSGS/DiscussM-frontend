import React, { Component } from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import FileUpload from 'material-ui-icons/FileUpload';
import IconButton from 'material-ui/IconButton';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import './Register.less';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.removeFile = this.removeFile.bind(this);
        this.initState = {
            selectedFile: '',
            errors: [],
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
            },
            file: {
                name: '',
                ext: ''
            }
        };
        this.state = this.initState;
    }
    onSubmit = e => {
        e.preventDefault();
        const { selectedFile, name } = this.state;
        const formData = new FormData();
        this.validate(formData).then(() => {
            if (this.state.errors.length === 0) {
                formData.append('file', selectedFile);
                formData.append('name', name.text);
                this.props.onRegister(formData).then(d => {
                    this.setState(this.initState);
                    this.props.history.push('/');
                });
            }
        });
    };

    getFileName() {
        const nameArr = this.state.selectedFile.name.split('.');
        const ext = `.${nameArr.pop()}`;
        const name = nameArr.join('.');
        const file = { name, ext };
        this.setState({ file });
    }
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
                } else {
                    formData.append('username', username.text.trim());
                }
            } else {
                this.setState({
                    errors: [...this.state.errors, 1],
                    username: { text: '', err: 'Username required' }
                });
            }

            if (email.text) {
                const isEmail = this.validateEmail();
                if (isEmail) {
                    formData.append('email', email.text.trim());
                } else {
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
                } else {
                    formData.append('password', password.text.trim());
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
                if (parsed >= 15) {
                    formData.append('age', parsed);
                } else {
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
            if (gender.text) {
                formData.append('gender', gender.text);
            } else {
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

    fileUpload = e => {
        const { state } = this;

        switch (e.target.name) {
            case 'selectedFile':
                [state.selectedFile] = e.target.files;
                this.getFileName();
                break;
            default:
                state[e.target.name] = e.target.value;
        }

        this.setState(state);
        this.getFileName();
    };
    removeFile = e => {
        this.setState({
            selectedFile: '',
            file: {
                ext: '',
                name: ''
            }
        });
    };
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
                        <input
                            accept="image/*"
                            id="raised-button-file"
                            type="file"
                            name="selectedFile"
                            onChange={this.fileUpload}
                            style={{ display: 'none' }}
                        />
                        <p>Upload your photo</p>
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span">
                                Upload
                                <FileUpload />
                            </Button>
                        </label>
                    </div>
                    <div className="uploaded">
                        {selectedFile ? (
                            <div>
                                <p className="filename">{file.name}</p>
                                <span>{file.ext}</span>
                                <IconButton
                                    onClick={this.removeFile}
                                    aria-label="Delete"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        ) : null}
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
