function Heading({ headingTitle, headingTopMargin }) {
    return (
        <div
            className="heading-container"
            style={{ marginTop: headingTopMargin ? "6rem" : "" }}
        >
            <h1 className="heading-container__title">{headingTitle}</h1>
        </div>
    );
}

export default Heading;
