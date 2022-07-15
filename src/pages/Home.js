import {Fragment} from "react";
import Navbar from "../common/Navbar";
import Header from "../componenten/home/Header";
import Testimonial from "../componenten/home/Testimonial";
import Modules from "../componenten/home/Modules";
import About from "../componenten/home/About";
import Contact from "../componenten/home/Contact";
import Footer from "../common/Footer";

function Home() {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <Testimonial />
            <Modules />
            <About />
            <Contact />
            <Footer />

        </Fragment>
    );
}

export default Home;