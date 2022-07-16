import Input from "../common/Input";
import { useState } from "react";

function Login({ onCancelAuth, onForgotPassword }) {
    const [inputValues, setInputValues] = useState({ name: "", email: "" });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInputValues({
            ...inputValues,
            [e.target.name]: value,
        });
    };
    return (
        <div className="auth-container">
            <div className="auth-container__input-wrapper">
                <div className="auth-container__input">
                    <Input
                        inputType="text"
                        inputPlaceholder="Naam..."
                        lableText="Naam"
                        inputName="name"
                        value={inputValues.name}
                        onInputChange={onChangeHandler}
                    />
                </div>
                <div className="auth-container__input">
                    <Input
                        inputType="Email"
                        inputPlaceholder="Email..."
                        lableText="Email"
                        inputName="email"
                        value={inputValues.email}
                        onInputChange={onChangeHandler}
                    />
                </div>
            </div>
            <div className="checkbox-container">
                <div
                    className="checkbox-container__input-wrapper"
                    onClick={() => onForgotPassword()}
                >
                    <label htmlFor="input">Wachtwoord vergeten.</label>
                </div>
                <div className="checkbox-container__input-wrapper">
                    <input type="checkbox" />
                    <label htmlFor="input">Remember me.</label>
                </div>
            </div>
            <div className="auth-btn-group">
                <button onClick={() => onCancelAuth()}>Cancel</button>
                <button>Login</button>
            </div>
        </div>
    );
}

export default Login;