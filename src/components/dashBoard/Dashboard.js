import React from 'react';
import './dashBoard.css'
import CatandLoc from '../category/CatandLoc'
import { NavLink, Route } from 'react-router-dom';
import Topic from '../topic/Topic'
import Media from '../media/Media'
import Preview from '../preview/Preview'
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'
import Modal from '../modal/Modal'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isActive: false,
            isSuccess: false,
            catClass: '',
            topicClass: '',
            mediaClass: '',
            previewCLass: ''
        }
    }

    setActiveClass = (obj) => {
        this.setState(obj)
    }

    render() {
        return (
            <>
            {this.state.isSuccess ?
             <Modal modalClick={this.setActiveClass}/>
             :
            <div className='dashBoardDiv'>
                <Navigation />
                <div className='bodyPart'>
                    <div className='contentDiv'>
                        <div className='content'>
                            <div className='menu'>
                                <NavLink to={{
                                    pathname: '/dashboard/category'
                                }} className={`link ${this.state.catClass}`}
                                    activeClassName='linkAct'>
                                    <p>1. Category and location</p>
                                </NavLink>
                                <NavLink to={{
                                    pathname: '/dashboard/topic'
                                }} className={`link ${this.state.topicClass}`}
                                    activeClassName='linkAct'>
                                    <p>2. Topic content</p>
                                </NavLink>
                                <NavLink to={{
                                    pathname: '/dashboard/media'
                                }} className={`link ${this.state.mediaClass}`}
                                    activeClassName='linkAct'>
                                    <p>3. Media</p>
                                </NavLink>
                                <NavLink to={{
                                    pathname: '/dashboard/preview'
                                }} className={`link ${this.state.previewCLass}`}
                                    activeClassName='linkAct'>
                                    <p>4. Preview</p>
                                </NavLink>
                            </div>
                            <Route path='/dashboard/category' component={() =>
                                <CatandLoc setActiveClass={this.setActiveClass} />} />
                            <Route path='/dashboard/topic' component={() =>
                                <Topic setActiveClass={this.setActiveClass} />} />
                            <Route path='/dashboard/media' component={() =>
                                <Media setActiveClass={this.setActiveClass} />} />
                            <Route path='/dashboard/preview' component={() =>
                                <Preview
                                    modalClick={this.setActiveClass}/>} />
                        </div>
                        
                    </div>
                    <Footer />
                </div>
            </div>
            }
            </>
        )
    }
}

export default Dashboard;