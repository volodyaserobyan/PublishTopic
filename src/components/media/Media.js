import React from 'react'
import './media.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setMedia } from '../../actions/Action';
import leftArrowImg from '../../images/Path 203 (1).svg'
import rightArrowImg from '../../images/Path 203.svg'
import deleteIcon from '../../images/icon.png'
const _ = require('lodash');

class Media extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            file: '',
            imagePreviewUrl: '',
            pictures: [],
            src: '',
            isComplete: false,
            isImageFull: false
        }
        this.index = ''
    }

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState(state => ({
                file: file,
                imagePreviewUrl: reader.result,
                pictures: state.pictures.concat({src: reader.result, name: file.name})
            }));
        }

        reader.readAsDataURL(file)
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.uploadMedia(this.state.pictures)

        if (!_.isEmpty(this.state.pictures)) {
            this.setState({
                isComplete: true
            })
        }
        else {
            alert('Choose at least one image')
        }

        setTimeout(() => {
            this.props.setActiveClass({ mediaClass: 'linkAct' })
        }, 0);
    }

    clickImg = (item, i) => {
        this.setState({
            isImageFull: true,
            src: item.src
        })

        this.index = i
    }

    nextImage = (isRight, e) => {
        e.stopPropagation()
        if (isRight) {
            this.index = this.index + 1
            if (this.index > this.state.pictures.length - 1) {
                this.index = 0
            }
            this.setState(state => ({
                src: state.pictures[this.index].src
            }))
        }
        else {
            this.index = this.index - 1
            if (this.index < 0) {
                this.index = this.state.pictures.length - 1
            }
            this.setState(state => ({
                src: state.pictures[this.index].src
            }))
        }
    }

    closeDiv = () => {
        this.setState({
            isImageFull: false,
            src: ''
        })
        this.index = ''
    }

    deleteImage = index => {
        let array = [...this.state.pictures]
        if (index !== -1) {
            array.splice(index, 1)
            this.setState({ pictures: array })
        }
    }

    render() {

        if (this.state.isComplete) {
            return (
                <Redirect to={{ pathname: '/dashboard/preview' }} />
            )
        }

        return (
            <>
                <div className='mediaDiv'>
                    <h1>Media</h1>
                    <p className='descriptionBlogMedia'>
                        Choose images for the overview section of your topic.
                    </p>
                    <form onSubmit={this.handleSubmit} className='imageContainer'>
                        <div className='containerChooseFileImg'>

                            <div className='imagees'>
                                <span className="hiddenFileInput">
                                    <input type="file" onChange={this.handleImageChange} />
                                </span>
                                {this.state.pictures.map((item, i) =>
                                    <div className='imgItem' key={i}>
                                        <img alt=''
                                            src={deleteIcon}
                                            onClick={() => this.deleteImage(i)}
                                            className='deleteIcon' />
                                        <img alt=''
                                            src={item.src}
                                            onClick={() => this.clickImg(item, i)}
                                            className='imggggg' />
                                    </div>
                                )}
                            </div>
                        </div>

                        <input type='submit' className='submitMedia' value='Continue' />
                    </form>
                </div>
                {this.state.isImageFull ?
                    <div onClick={this.closeDiv} className='fullImage'>
                        <div className='arrowDiv'>
                            <img alt=''
                                onClick={(e) => this.nextImage(false, e)}
                                src={leftArrowImg}
                                className='arrowImg' />
                            <img alt=''
                                onClick={(e) => this.nextImage(true, e)}
                                src={rightArrowImg}
                                className='arrowImg' />
                        </div>
                        <img alt=''
                            onClick={e => e.stopPropagation()}
                            className='fullImg'
                            src={this.state.src} />
                    </div> : <></>}
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
        uploadMedia: data => dispatch(setMedia(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);