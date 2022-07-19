import {Fragment, useEffect} from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Theory from "../componenten/account/Theory";
import SelectedModule from "../componenten/account/SelectedModule";
import VideoContent from "../componenten/account/VideoContent";
import { cardData } from "../data/cardData";
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function Account() {

    const [selectedCourse, setSelectedCourse] = useState([]);
    const params = useParams();
    const { id } = params;

    console.log(id);

    useEffect(() => {
        const courseArray = [];
        console.log(id);

            cardData.forEach((data) => {
                if (data.id == id){
                    courseArray.push({text:data.text,module:data.btnText});
                }
            });

            setSelectedCourse(courseArray);
            }, [id]);
    console.log(selectedCourse);

    return (
        <Fragment>
            <Navbar />
            <div style={{marginTop: "2rem", height:"3rem"}} />
            <SelectedModule selectedModule={selectedCourse} />
            <Theory />
            <VideoContent />
            <Footer />
        </Fragment>
    );
}

export default Account;