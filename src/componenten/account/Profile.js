import pic from "../../assets/images/picture.png";
// import Modal from "../../common/Modal";
// import ModalEditAccount from "../../common/ModalEditAccount";
// import {useEffect, useState} from "react";

function Profile() {
    // const [modalEditAccount, setModalEditAccount] = useState(false);

    // useEffect(() => {
    //     if (modalEditAccount) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "scroll";
    //     }
    // }, [modalEditAccount]);

    return (
        <>
        <div className="profile-container">
            <div className="profile-container__pic-wrapper">
                <img src={pic} alt="user-pic" className="profile-container__user-img" />
            </div>
            <div className="profile-container__message">
                <h1>Welkom en succes met de cursus Gytha! </h1>
            </div>
            <div className="profile-container__user-credentials">
                <p>Naam: Gytha Brooks</p>
                <p>Date of birth: 25/05/1997</p>
                <p>Email: g.brooks@gmail.com</p>
                <button className="edit-btn">Edit</button>
            </div>
        </div>
            {/*{modalEditAccount && <ModalEditAccount onCancelEdit={() => setModalEditAccount(false)} /> }*/}
        </>
    );
}

export default Profile;