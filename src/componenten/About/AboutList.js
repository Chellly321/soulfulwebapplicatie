import { useState } from "react";

function AboutList() {
    const [expandId, setExpandId] = useState(0);

    const expandYogaDetail = () => {
        if (expandId === 1) {
            setExpandId(0);
        } else {
            setExpandId(1);
        }
    };

    const expandSoulfulDetail = () => {
        if (expandId === 2) {
            setExpandId(0);
        } else {
            setExpandId(2);
        }
    };
    return (
        <div className="about-list-container">
            <h1>Mijn verhaal</h1>
            <div className="about-list-container__btn-group">
                <button onClick={expandYogaDetail}>
                    {expandId === 1 ? "-" : "+"} Yoga veranderde mijn leven
                </button>
                {expandId === 1 && (
                    <div>
                        <p>
                            Als HBO studente volgde ik uiteenlopende studies maar ik had er
                            moeite mee om de juiste beroepskeuze te maken. Steeds opnieuw kwam
                            ik in dezelfde virtueuze cirkel terecht. De studieresultaten waren
                            goed maar ik voelde me nooit echt op mijn plek waardoor ik weer
                            van studierichting wisselde. Ik werd al als kind al omschreven als
                            creatief, zorgzaam en pienter maar te dromerig, te rusteloos en te
                            chaotisch.
                        </p>
                        <p>
                            Op 19 jarige leeftijd werd ADD geconstateerd. Hierna volgden
                            verschillende coaching trajecten. Op aanraden van de dokter nam ik
                            medicatie om mijn focus te vergroten en de zogenoemde 'klachten'
                            te verminderen. Een leven lang medicijnen met vervelende
                            bijwerkingen? Dit ging totaal tegen mijn gevoel in! Na eigen
                            onderzoek kwam ik uit op yoga en mediteren om meer focus en
                            innerlijke rust te creëren.
                        </p>
                        <p>
                            Ik maakte yoga en meditatie onderdeel van mijn dagelijkse routine,
                            het bracht meer teweeg dan ik ooit had durven hopen! Het voelde
                            als thuiskomen bij mezelf. Ik stopte met de ADD medicatie en
                            stopte ook met de traditionele manier van studeren. Vanaf nu las
                            ik boek na boek over zelfontwikkeling en holistische psychologie.
                            Ik deed een yogastudie in India en volgde cursus na cursus op het
                            gebied van massage en yoga. Ik leerde mijn authentieke eigenschappen te omarmen, te benutten en op de juiste manier in te
                            zetten. En die klachten? Dat bleken uiteindelijk mijn sterkste
                            kerneigenschappen! 'Rusteloosheid' bleek mijn drang naar zingeving
                            en voldoening. 'Dromerigheid' bleek mijn drang naar creatie en
                            mijn eigen pad bewandelen. 'Chaotisch' bleek mijn drang naar
                            ontspanning en terug naar de basis. Alles dat ten grondslag ligt
                            aan mijn onderneming; SOULFUL, opgericht in 2017.
                        </p>
                        <p>
                            SOULFUL is er speciaal voor vrouwen in alle levensfases, zodat zij
                            door middel van zorgzame rituelen worden geholpen steeds weer
                            thuis te komen bij zichzelf.
                        </p>
                    </div>
                )}
                <button onClick={expandSoulfulDetail}>
                    {expandId === 2 ? "-" : "+"} Soulful Pregnancy
                </button>
                {expandId === 2 && (
                    <div>
                        <p>
                            Toen ik 25 was, was ik in verwachting van mijn zoontje. Dit was
                            net voordat ik startte aan mijn opleiding tot yogalerares in
                            India. Het had zo moeten lopen... de twee werelden van yoga en
                            zwangerschap kwamen samen. Ik zag mijn bevalling als de ultieme
                            test om alles wat ik tot zover geleerd had over
                            ademhalingstechnieken en yogafilosofie in de praktijk te brengen.
                            Met een droombevalling, thuis in eigen bad, als resultaat. De
                            mooiste dag van mijn leven. En voor mij het bewijs dat de
                            theorieën, die ik geleerd had, dus echt werken. Dit moet ik delen!
                            Nooit eerder voelde ik me dichter bij mijn levensdoel... Ik volgde
                            de de opleiding tot geboorteconsulente, ik heb me helemaal ondergedompeld in de wereld van zwangerschap en bevallen. <br />
                            Het is mijn doel om zoveel mogelijk (toekomstige) mama’s te helpen
                            vanuit ontspanning en zelfvertrouwen de periode rondom de geboorte
                            tegemoet te gaan. Ik wens je een bevalling toe waar je later goed
                            op terug kunt kijken of dat nou in het ziekenhuis of thuis is
                            geweest. Het is een eer dat ik een positieve bijdrage mag leveren
                            in het magische proces van nieuw leven. Met alle liefde ben ik er
                            voor jou, zodat je jezelf in het moederschap en jouw baby in het
                            leven de mooiste start kunt geven. Nieuwsgierig hoe ? Lees dan
                            verder op de pagina van Soulful Pregnancy.
                        </p>
                        <p>
                            Ik blijf op de hoogte van nieuwe inzichten en ontwikkelingen door
                            op meerdere vakgebieden bijscholingen te volgen.
                        </p>
                    </div>
                )}
            </div>
            <div className="about-list-container__list-wrapper">
                <h4>Een greep uit mijn specialisaties: </h4>
                <div className="list-wrapper__lists">
                    <ul>
                        <li>- Docent Hatha Yoga </li>
                        <li>- Lomi Lomi massage </li>
                        <li>- Docent Yin Yoga </li>
                        <li>- Docent zwangerschapsyoga</li>
                        <li>- Ademcoach</li>
                        <li>- Wellness/ ontspan massage </li>
                        <li>- Zwangerschapscoach </li>
                        <li>- Intuïtieve massage </li>
                        <li>- Geboorteconsulente</li>
                        <li>- Zwangerschapsmasseuse</li>
                        <li>- Sportmasseuse</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutList;






