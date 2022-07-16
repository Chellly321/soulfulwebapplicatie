import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactDetail() {
    return (
        <div className="contact-detail-container">
            <div className="contact-detail__info-wrapper">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactDetail;