import AboutInfo from "./AboutInfo";
import AboutList from "./AboutList";

function AboutDetail() {
    return (
        <div className="about-detail-container">
            <h1>Wie ben ik?</h1>
            <AboutInfo />
            <AboutList />
        </div>
    );
}

export default AboutDetail;