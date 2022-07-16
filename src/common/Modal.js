import Login from "../auth/Login";
import Signup from "../auth/Signup";
import ForgotPassword from "../auth/ForgotPassword";
import { useState } from "react";

const authData = [
    { id: 1, title: "Login" },
    { id: 2, title: "Signup" },
];

function Modal({ onCloseModal }) {
    const [btnId, setBtnId] = useState(1);

    const onBtnClick = (id) => {
        setBtnId(id);
    };
    const onForgotPasswordHandler = () => {
        setBtnId(3);
    };
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal__content">
                    <div className="btn-container">
                        {authData.map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => onBtnClick(btn.id)}
                                style={{
                                    border: btn.id === btnId ? "3px solid #AE865E" : "none",
                                }}
                            >
                                {btn.title}
                            </button>
                        ))}
                    </div>
                    {btnId === 1 && (
                        <Login
                            onCancelAuth={onCloseModal}
                            onForgotPassword={onForgotPasswordHandler}
                        />
                    )}
                    {btnId === 2 && <Signup onCancelAuth={onCloseModal} />}
                    {btnId === 3 && <ForgotPassword onCancelAuth={onCloseModal} />}
                </div>
            </div>
        </div>
    );
}

export default Modal;