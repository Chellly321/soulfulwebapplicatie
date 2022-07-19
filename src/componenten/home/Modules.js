import Card from "../../common/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import {cardData} from "../../data/cardData";
import { useLocation } from "react-router-dom";

function Modules({ moduleBg, showTitle }) {
    const [cardId, setCardId] = useState(null);
    const location = useLocation();

    const onCardClick = (id) => {
        setCardId(id)
    }
    console.log(cardId);

    return (
        <div className="modules-container" style={{ backgroundColor: moduleBg }}>
            {showTitle && <h1>Modules</h1>}

            <div className="card-container">
                {cardData.map((data) => (
                    <Link to={ location.pathname === '/account'
                        ? `/account#${data.id}`
                        : `/course/${data.id}`
                    }
                          className="link-style"
                          key={data.id}>
                    <Card
                        text={data.text}
                        btnText={data.btnText}
                        cardBorder={data.id === cardId ? "#8b6743" : "white"}
                        onCardClick={() => onCardClick(data.id)}
                    />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Modules;
