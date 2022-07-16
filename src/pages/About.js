import { Fragment } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import AboutDetail from "../componenten/About/AboutDetail";

function About() {
    return (
        <Fragment>
            <Navbar />
            <AboutDetail />
            <Footer />
        </Fragment>
    );
}

export default About;