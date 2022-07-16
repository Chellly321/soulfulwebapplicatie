import { Fragment } from "react";
import Navbar from "../common/Navbar";
import ContactDetail from "../componenten/contact/ContactDetail";
import Footer from "../common/Footer";

function Contact() {
    return (
        <Fragment>
            <Navbar />
            <ContactDetail />
            <Footer />
        </Fragment>
    );
}

export default Contact;