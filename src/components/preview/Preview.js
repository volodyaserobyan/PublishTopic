import React from 'react'
import './preview.css'
import { connect } from 'react-redux';
import userIcon from '../../images/NoPath - Copy (5).png'
import { publishTopic } from '../../actions/Action';
const _ = require('lodash');

class Preview extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSuccess: false
        }
        this.mediaObj= {}
        this.name = ''
    }

    handlePublish = () => {
        this.props.modalClick({isSuccess: true})

        if(!_.isEmpty(this.props.completeReducer)) {

            let formData = new FormData()
            formData.append('categoryId', this.props.completeReducer.catAndTop.catId)
            formData.append('address', this.props.completeReducer.catAndTop.address)
            formData.append('lat', parseFloat(this.props.completeReducer.catAndTop.lat))
            formData.append('Ing', parseFloat(this.props.completeReducer.catAndTop.Ing))
            formData.append('title', this.props.completeReducer.topic.title)
            formData.append('description', this.props.completeReducer.topic.description)
            formData.append('amount', parseInt(this.props.completeReducer.topic.amount))
            this.props.completeReducer.media.forEach(element => {

                //Decode from Base64 to Binary

                // let name = element.name
                // let BASE64_MARKER = ';base64,';

                // var base64Index = element.src.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
                // var base64 = element.src.substring(base64Index);
                // let raw = window.atob(base64);
                // let rawLength = raw.length;
                // let array = new Uint8Array(new ArrayBuffer(rawLength));
              
                // for(let i = 0; i < rawLength; i++) {
                //   array[i] = raw.charCodeAt(i);
                // }
                formData.append('file', element)
            });


            this.props.fetchPreview('https://2gatherapi.abmdemo.me/api/topic/', formData)

        }
    }

    render() {
        return (
            <>
                {_.isEmpty(this.props.completeReducer) ?
                    <h6>Please fill article properly</h6>
                    :
                    <div className='previewDiv'>
                        <h1>Preview</h1>
                        <div className='imageContainerPreview'>
                            {this.props.completeReducer.media.map((item, i) =>
                                <img alt='' key={i} className='imgPreview' src={item.src} />)}
                        </div>
                        <div className='userInf'><img alt='' src={userIcon} /> <b>Anna Smith</b></div>
                        <div className='contentPreview'>
                            <h1>{this.props.completeReducer.topic.title}</h1>
                            <p>{this.props.completeReducer.topic.description}</p>
                        </div>
                        <button onClick={this.handlePublish} className='publishPreview'>Publish</button>
                    </div>
                }
            </>
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
        fetchPreview: (url, infoObj) => dispatch(publishTopic(url, infoObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);