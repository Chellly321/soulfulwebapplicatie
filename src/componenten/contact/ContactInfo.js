import pic from "../../assets/images/picture.png";

function ContactInfo() {
    return (
        <div className="contact-info-container">
            <div>
                <p>soulfulwithme@outlook.com</p>
            </div>
            <div>
                <p>+31 6486 30 443</p>
            </div>
            <div>
                <img
                    src={pic}
                    alt="contact-us"
                    className="contact-info-container__img"
                />
            </div>
        </div>
    );
}

export default ContactInfo;