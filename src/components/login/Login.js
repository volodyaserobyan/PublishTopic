import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import { loginAct } from '../../actions/Action';
import { Redirect } from 'react-router-dom';
const _ = require('lodash');

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            success: false
        }
        this.className = ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.loginReducer) && nextProps.loginReducer.success) {
                this.setState({
                    success: true
                })
                localStorage.setItem('authToken', nextProps.loginReducer.data.authToken)
                localStorage.setItem('refreshToken', nextProps.loginReducer.data.refreshToken)
            }
            else {
                alert(nextProps.loginReducer.message)
            }

        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const sendObj = {
            deviceId: '',
            deviceToken: '',
            osType: 3,
            email: this.state.email,
            password: this.state.password
        }
        this.props.fetchData('https://2gatherapi.abmdemo.me/api/auth/login', sendObj)
    }

    render() {
        if (this.state.success) {
            return (
                <Redirect to={{ pathname: '/dashboard/category' }} />
            )
        }
        return (
            <div className='containerLogin'>
                <div className='loginDiv'>
                    <div className='titleCont'>
                        <h1>Sign In</h1>
                        <p>Enter your email and password and login in your account</p>
                    </div>
                    <form onSubmit={this.handleSubmit} className='formLogin'>
                        <div className='labelInp'>
                            <label className='label'>Email</label>
                            <input name='email'
                                required
                                autoComplete='off'
                                type='text'
                                className='input'
                                onChange={this.handleChange}
                                value={this.state.email || ''} />
                        </div>

                        <div className='labelInp'>
                            <label className='label'>Password</label>
                            <input type='password'
                                required
                                name='password'
                                className='input1'
                                onChange={this.handleChange}
                                value={this.state.password || ''} />
                        </div>

                        <input type='submit'
                            value='Sign In'
                            className='submitInp' />
                    </form>
                </div>
                <div className='containerImage'>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    if (_.isEmpty(state)) {
        return {
            ...state
        };
    }
    else {
        return {
            loginReducer: state.loginReducer.info
        };
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, infoObj) => dispatch(loginAct(url, infoObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);