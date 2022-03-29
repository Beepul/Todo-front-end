import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
        <div className="footer">
            <h3 className="heading">MY TO-DO APP</h3>
            <p className="paragraph">Set reminders, reschedule tasks, and assign priorities so you never lose anything again.</p>
        <div className="icons">
            <div className="facebook">
                <FontAwesomeIcon icon={faFacebook} className="fb"></FontAwesomeIcon>
            </div>
            <div className="instagram">
                <FontAwesomeIcon icon={faInstagram} className="insta"></FontAwesomeIcon>
            </div>
            <div className="github">
                <FontAwesomeIcon icon={faGithub} className="gb" size="2em"></FontAwesomeIcon>
            </div>
        </div>

        <div className="copyright-container"><h4 className="copyright">Copyright @2021 TodoApp. Designed by Beepul Magar</h4></div>
    </div>
    )
}

export default Footer;