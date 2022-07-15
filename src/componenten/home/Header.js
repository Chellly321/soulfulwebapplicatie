import headerImg from "../../assets/images/header-img.svg";

function Header() {
    return (
        <div className="header-container" id="header-section">
            <img src={headerImg} alt="header-img" />
            <button className="header-container__btn">START DE CURSUS</button>
        </div>
    );
}

export default Header;