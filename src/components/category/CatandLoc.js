import React from 'react';
import './catandloc.css'
import { connect } from 'react-redux';
import { getCategory, setData } from '../../actions/Action';
import mapImg from '../../images/Group 628.png';
import { Redirect } from 'react-router-dom';
const _ = require('lodash');

class CatandLoc extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedValueCategory: 'Select category',
            selectedValueLocation: 'Choose location',
            isComplete: false,
            place: null
        }
    }

    handleSelectChange = e => {
        this.setState({ selectedValueCategory: e.target.value });
    }

    handleClick = () => {
        this.props.uploadData({catId: this.state.selectedValueCategory,
                                lat: 40.201489,
                                Ing: 44.499930,
                                address: 'V.Vagharshyan'})

        this.setState({
            isComplete: true
        })

        setTimeout(() => {
            this.props.setActiveClass({ catClass: 'linkAct' })
        }, 0);
    }

    componentDidMount() {
        this.props.fetchCategory('https://2gatherapi.abmdemo.me/api/topic/category')
    }

    render() {
        if (_.isEmpty(this.props.categoryReducer)) {
            return (
                'Loading...'
            )
        }
        if (this.state.isComplete) {
            return (
                <Redirect to={{ pathname: '/dashboard/topic' }} />
            )
        }
        return (
            <div className='itemDash'>
                <h1>Location and category</h1>
                <p>Please select your project
                     category and choose location
                                  of your proposed project</p>

                <p>Category</p>
                <select className='select'
                    onChange={this.handleSelectChange}
                    value={this.state.selectedValueCategory}>
                    <option>Select Category</option>
                    {this.props.categoryReducer.category.data.map((item, i) =>
                        <option value={item.id} key={i}>{item.name}</option>
                    )}
                </select>
                <p>Location</p>
                <p className='selectP'> Choose Location</p>
                <img src={mapImg} className='imageMap' alt=''/>
                <button onClick={this.handleClick} className='contiueBtn'>CONTINUE</button>
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
            categoryReducer: state.categoryReducer
        };
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: (url) => dispatch(getCategory(url)),
        uploadData: data => dispatch(setData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatandLoc);