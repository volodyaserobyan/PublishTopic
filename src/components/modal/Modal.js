import React from 'react';
import './modal.css'
import iconModal from '../../images/Group 922.svg'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset } from '../../actions/Action';
const _ = require('lodash');

class Modal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            compiled: false
        }
    }

    submitModal = () => {
        setTimeout(() => {
            this.props.modalClick({
                isSuccess: false,
                catClass: '',
                topicClass: '',
                mediaClass: '',
                previewCLass: ''
            })
        }, 0);
        this.props.resetAct()
        this.setState({
            compiled: true
        })
    }

    render() {
        if (this.state.compiled) {
            return (
                <Redirect to={{ pathname: '/dashboard/category' }} />
            )
        }

        return (
            <div className='mainDiv'>
                <div className='modalDiv'>
                    <div className='modalContext'>
                        <div className='titleModal'>
                            <img alt='' src={iconModal} className='modalIcon' />
                            <h5>Your topic was successfully submitted!</h5>
                        </div>
                        <p className='pBodyModal'>We are very thankful that you are our community active member. It will appear in community forum as soon as we have an overview look at it</p>
                        <button onClick={this.submitModal} className='modalButton'>Ok</button>
                    </div>
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
            completeReducer: state.completeReducer
        };
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetAct: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);