import { Fragment } from "react";
import Navbar from "../common/Navbar";
import CourseOverview from "../componenten/cursus/CursusOverzicht";
import Footer from "../common/Footer";
import Heading from "../common/Heading";
import Modules from "../componenten/home/Modules";

function Cursus() {
    return (
        <Fragment>
            <Navbar />
            <Heading headingTitle="Lesstof " headingTopMargin={true} />
            <CourseOverview />
            <Modules showTitle={false} moduleBg="white" />
            <Footer />
        </Fragment>
    );
}

export default Cursus;