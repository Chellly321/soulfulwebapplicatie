import { Fragment } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Heading from "../common/Heading";
import Profile from "../componenten/account/Profile";
import Modules from "../componenten/home/Modules";
import Theory from "../componenten/account/Theory";
import SelectedModule from "../componenten/account/SelectedModule";
import VideoContent from "../componenten/account/VideoContent";

function Account() {
    return (
        <Fragment>
            <Navbar />
            <Profile />
            <Heading headingTitle="Mijn overzicht" />
            <Modules showTitle={false} moduleBg="white" />
            <Theory />
            <SelectedModule />
            <VideoContent />
            <Footer />
        </Fragment>
    );
}

export default Account;