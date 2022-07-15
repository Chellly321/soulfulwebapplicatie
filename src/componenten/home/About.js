import pic from "../../assets/images/picture.png";
function About() {
    return (
        <div className="about-container" id="about-section">
            <div>
                <img src={pic} alt="about-pic" className="about-pic" />
            </div>
            <div>
                <h1>Wie ben ik?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro
                    repellat laborum! Mollitia excepturi consequuntur nisi voluptatem
                    maxime eum, odio numquam magni, vero magnam, nostrum neque aut aliquid
                    quaerat ullam.
                </p>
            </div>
        </div>
    );
}

export default About;