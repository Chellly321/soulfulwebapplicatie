import logo from "../assets/images/soulful-logo.svg";
import accountIcon from "../assets/icons/account-icon.svg";

import {Link, NavLink} from "react-router-dom";
import { useLocation } from "react-router";
import { Fragment, useState } from "react";



const navData = [
    { id: 1, title: "Home", linkTo: "/" },
    { id: 2, title: "Over mij", linkTo: "/about" },
    { id: 3, title: "Contact", linkTo: "/contact" },
    { id: 4, title: "Cursus", linkTo: "/courses" },
];
function Navbar() {
    const [mobileNav, setMobileNav] = useState("0");
    const [modal, setModal] = useState(false);

    const location = useLocation()

    const renderList = () => {
        if (location.pathname !== "/dashboard") {
            return (
                <ul className="list-container">
                    {navData.map((nav) => (
                        <NavLink
                            exact
                            to={nav.linkTo}
                            activeClassName="active-item"
                            className="nav-link"
                            key={nav.id}
                        >
                            {nav.title}
                        </NavLink>
                    ))}
                </ul>
            );
        }
    };
    const renderAccount = () => {
        if (location.pathname === "/dashboard") {
            return (
                <Link to="/dashboard" className="link-style">
                    <div className="nav-container__account">
                        My Account
                        <span>
              <img src={accountIcon} alt="user-icon" />
            </span>
                    </div>
                </Link>
            );
        } else {
            return (
                <div className="nav-container__account">
                    <div className="login" onClick={() => setModal(true)}>
                        Login
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="nav-container" >
            <div className="nav-container__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            {/* Mobile section */}
            <div className="mobile-nav" onClick={() => setMobileNav("250px")}>
                <div />
                <div />
                <div />
            </div>
            <div className="sidenav" style={{ width: mobileNav }}>
                <div className="close" onClick={() => setMobileNav(0)} />
                {renderList()}
                <div className="mobile-account-container">{renderAccount()}</div>
            </div>
            {/* End of mobile section*/}

            <div className="list-wrapper">{renderList()}</div>

            <div className="account-container">{renderAccount()}</div>
        </div>
    );
}

export default Navbar;
