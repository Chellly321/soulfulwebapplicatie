import logo from "../assets/images/soulful-logo.svg";
import fbIcon from "../assets/icons/fb-icon.svg";
import instaIcon from "../assets/icons/insta-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";

function Footer() {
    return (
        <div className="footer-container">
            <div>
                <img src={logo} alt="souful-logo" className="footer-logo" />
            </div>
            <div className="footer-container__menu">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Privacy</li>
                    <li>Terms and conditions</li>
                </ul>
            </div>
            <div className="footer-container__menu">
                <ul>
                    <li>Course</li>
                    <li>My Account</li>
                </ul>
            </div>
            <div className="footer-container__icons">
                <ul>
                    <li>
                        <img src={fbIcon} alt="fb-icon" />
                    </li>
                    <li>
                        <img src={instaIcon} alt="insta-icon" />
                    </li>
                    <li>
                        <img src={linkedInIcon} alt="linkedin-icon" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
