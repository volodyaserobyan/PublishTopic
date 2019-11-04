import React from 'react'
import './topic.css'
import { connect } from 'react-redux';
import { setDataTopic } from '../../actions/Action';
import { Redirect } from 'react-router-dom';
const _ = require('lodash');

class Topic extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            titleInp: '',
            descInp: '',
            amountInp: '',
            isComplete: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.descInp.length >= 500){
            const sendObj = {
                title: this.state.titleInp,
                description: this.state.descInp,
                amount: this.state.amountInp
            }
            this.props.uploadDataTopic(sendObj)
    
            this.setState({
                isComplete: true
            })
            setTimeout(() => {
                this.props.setActiveClass({topicClass: 'linkAct'})
            }, 0);
        }
        else {alert('Min 500 Symbols')}
    }

    render() {
        if (this.state.isComplete) {
            return (
                <Redirect to={{ pathname: '/dashboard/media' }} />
            )
        }
        return (
            <div className='topicDiv'>
                <h1>Topic content</h1>
                <p className='descriptionBlog'>Give name to the topic that
                     will attract as many people as possible.
                      The more people upvoted for it, the more are chances that it will
                     be started. Describe project and why it is important to start.</p>
                <form onSubmit={this.handleSubmit} className='topicForm'>
                    <label className='labelTopic'>Title</label>
                    <input className='titleInp'
                        name='titleInp'
                        value={this.state.titleInp}
                        placeholder="Write title"
                        onChange={this.handleChange}
                        required />
                    <div className='titleDiv'>
                        <label className='labelTopic'>Description</label>
                        <p>min 500 simbols</p>
                    </div>
                    <textarea className='descInp'
                        name='descInp'
                        value={this.state.descInp}
                        placeholder='Topic Description'
                        onChange={this.handleChange} 
                        required/>
                    <label className='labelTopic'>Rough project budget</label>
                    <input className='amountInp'
                        name='amountInp'
                        type='number'
                        value={this.state.amountInp}
                        placeholder='Write amount'
                        onChange={this.handleChange} 
                        required/>
                    <div className='checkBoxDiv'>
                        <input className='checkBoxInp' type='checkbox' />
                        <p>i am not sure how much amount is required</p>
                    </div>

                    <input type='submit' className='submitTopic' value='Continue' />
                </form>
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
        uploadDataTopic: data => dispatch(setDataTopic(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);