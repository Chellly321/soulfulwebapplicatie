import Card from "../../common/Card";

const cardData = [
    {
        id: 1,
        btnText: "Module 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 2,
        btnText: "Module 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 3,
        btnText: "Module 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 4,
        btnText: "Module 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 5,
        btnText: "Module 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 6,
        btnText: "Module 6",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 7,
        btnText: "Module 7",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
        id: 8,
        btnText: "Module 8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
];

function Modules({ moduleBg, showTitle }) {
    return (
        <div className="modules-container" style={{ backgroundColor: moduleBg }}>
            {showTitle && <h1>Modules</h1>}

            <div className="card-container">
                {cardData.map((data) => (
                    <Card key={data.id} text={data.text} btnText={data.btnText} />
                ))}
            </div>
        </div>
    );
}

export default Modules;
