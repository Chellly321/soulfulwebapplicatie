import pic from "../../assets/images/picture.png";
import instaIcon from "../../assets/icons/insta-icon.svg";
import fbIcon from "../../assets/icons/fb-icon.svg";

function AboutInfo() {
    return (
        <div className="about-info-container">
            <div>
                <img src={pic} alt="about-pic" className="about-pic" />
            </div>
            <div className="about-info-container__text-container">
                <div className="about-info-container__text">
                    <p>Hallo, Wat fijn dat je er bent! Ik zal me even voorstellen,</p>

                    <p>
                        Mijn naam is Gytha Brooks (30), mama van Elijah (4) en eigenaresse
                        van SOULFUL.
                    </p>
                    <p>
                        Binnen SOULFUL ben ik, speciaal voor vrouwen in alle levensfases,
                        werkzaam als yogalerares en masseuse. Ook voor ontspannende
                        behandelingen en coaching rondom zwangerschap en kraamtijd kun je
                        bij mij terecht. Neem een kijkje op de Website en ontdek wat SOULFUL
                        voor jou kan betekenen. Voel je welkom om contact met mij op te
                        nemen als je vragen hebt of een afspraak in zou willen plannen. ​
                    </p>
                    Hafiz Abdul Rehman to Everyone (9:03 AM)
                    <p>soulfulwithme@outlook.com</p>

                    <p>+31 6486 30 443</p>
                </div>
                <div className="about-info-container__icons-container">
                    <img src={instaIcon} alt="instagram-icon" />
                    <img src={fbIcon} alt="fb-icon" />
                </div>
            </div>
        </div>
    );
}

export default AboutInfo;