import balanceIcon from "../../assets/icons/balance-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import Graph from "../../common/Graph";

function Balance() {
    return (
        <div className="balance-container">
            <div className="balance-wrapper">
                <div className="balance-wrapper__inner">
                    <div>
                        <img src={balanceIcon} alt="balance-icon" />
                    </div>
                    <div className="balance-wrapper__inner-text">
                        <p>Totale inkomsten</p>
                        <h1>€2,000</h1>
                        <p>
                            <span>+23%</span> vergeleken vorige maand
                        </p>
                    </div>
                    <div className="balance-wrapper__chart">
                        <Graph
                            displayXLine={false}
                            displayYLine={false}
                            responsive={false}
                        />
                    </div>
                </div>
            </div>
            <div className="balance-wrapper">
                <div className="balance-wrapper__inner">
                    <div>
                        <img src={userIcon} alt="user-icon" />
                    </div>
                    <div className="balance-wrapper__inner-text">
                        <p>Aantal studenten</p>
                        <h1>40</h1>
                        <p>
                            <span>+10%</span> vergeleken vorige maand
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;