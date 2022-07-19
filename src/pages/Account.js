import { Fragment, useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Heading from "../common/Heading";
import Profile from "../componenten/account/Profile";
import Modules from "../componenten/home/Modules";
import Theory from "../componenten/account/Theory";
import SelectedModule from "../componenten/account/SelectedModule";
import VideoContent from "../componenten/account/VideoContent";
import { useLocation } from 'react-router-dom';
import { cardData } from "../data/cardData";

function Account() {
    const [selectedCourse, setSelectedCourse] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const pathArray = location.hash.split("#")
        const courseArray = [];

        cardData.forEach((data) => {
            if (data.id == parseInt(pathArray[1])){
                courseArray.push({text:data.text,module:data.btnText});
            }
            setSelectedCourse(courseArray);
        });
    }, [location.hash])


    return (
        <Fragment>
            <Navbar />
            <Profile />
            <Heading headingTitle="Mijn overzicht" />
            <Modules showTitle={false} moduleBg="white" />
            <SelectedModule selectedModule={selectedCourse} />
            <Theory />
            <VideoContent />
            <Footer />
        </Fragment>
    );
}

export default Account;