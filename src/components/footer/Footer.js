import React from 'react'
import './footer.css'
import fbIcon from '../../images/facebook-app-symbol.svg'
import twitterIcon from '../../images/twitter (1).svg'
import linkedInIcon from '../../images/linkedin-logo (1).svg'
import instaIcon from '../../images/instagram-logo (1).svg'
import rightArrow from '../../images/right-arrow (1).svg'

const Footer = () => {

    return(
        <div className='footer'>
                        <div className='footerContainer'>
                            <div className='telPhone'>
                                <div className='tel'>
                                    <p>Tel:</p>
                                    <p>Mail:</p>
                                </div>
                                <div className='phoneNumber'>
                                    <p>+374401111</p>
                                    <p>charity@gmail.com</p>
                                </div>
                            </div>
                            <div className='company'>
                                <b>Company</b>
                                <div className='home'>
                                    <p>Home</p>
                                    <p>Projects</p>
                                    <p>Community</p>
                                    <p>About Us</p>
                                    <p>News</p>
                                </div>
                            </div>
                            <div className='helpSupp'>
                                <b>Help and Support</b>
                                <div className='faq'>
                                    <p>FAQ</p>
                                    <p>Terms and Conditions</p>
                                    <p>Privacy Policy</p>
                                    <p>Contacts</p>
                                </div>
                            </div>
                            <div className='social'>
                                <b>Follow us in social</b>
                                <div className='itemsDiv'>
                                    <img alt='' src={fbIcon} />
                                    <img alt='' src={twitterIcon} />
                                    <img alt='' src={linkedInIcon} />
                                    <img alt='' src={instaIcon} />
                                </div>
                                <b>Subscribe for new projects</b>
                                <div className='secPage'>
                                    <input className='yourEmail' placeholder='Your email' />
                                    <img alt='' src={rightArrow} />
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Footer