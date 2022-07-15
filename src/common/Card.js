function Card({ text, btnText }) {
    return (
        <div className="card">
            <p>{text}</p>
            <button>{btnText}</button>
        </div>
    );
}

export default Card;