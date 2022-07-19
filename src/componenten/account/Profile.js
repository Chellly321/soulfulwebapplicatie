import pic from "../../assets/images/picture.png";
import Modal from "../../common/Modal";
import {useState} from "react";

const editValues = {
    id:1,
    name: 'romi',
    email:'michelle.royer@icloud.com',
    password:"12345678",
    file:"",
};


function Profile() {

    const [editMode, setEditMode] = useState(false)

    const CloseEditModalHandler = () => {
        setEditMode(false);
    }

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
                <p>Name: {editValues.name}</p>
                <p>Email: {editValues.email}</p>
                <button className="edit-btn"
                onClick={() => setEditMode(true)}>
                    Edit
                </button>
            </div>
        </div>
            {editMode && <Modal editAccount={editMode} onCloseModal={CloseEditModalHandler} userValues={editValues}/>}
        </>
    );
}

export default Profile;