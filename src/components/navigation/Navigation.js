import React from 'react'
import './navigation.css'
import searchIcon from '../../images/magnifying-glass (2).svg'
import notificationIcon from '../../images/notifications-button (1).svg'
import userIcon from '../../images/NoPath - Copy (5).png'

const Navigation = () => {
    return (
        <nav>
            <div className='iconCollection'>
                <img alt='' src={searchIcon} className='searchImg' />
                <img alt='' src={notificationIcon} className='notifyImage' />
                <div className='userIconAndName'>
                    <img alt='' src={userIcon} className='userImage' />
                    <p>Anna Smith</p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation