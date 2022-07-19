function Card({ text, btnText, cardBorder, onCardClick }) {
    return (
        <div className="card" style={{border: `3px solid ${cardBorder}`}}
             onClick={onCardClick}
        >
            <p>{text}</p>
            <button>{btnText}</button>
        </div>
    );
}

export default Card;