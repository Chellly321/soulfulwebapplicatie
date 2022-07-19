import Input from "../common/Input";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Signup({ onCancelAuth }) {
    const [startDate, setStartDate] = useState(new Date());

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        password: "",
        dateOfBirth:"",
    });

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
                <div className="auth-container__input">
                    <Input
                        inputType="Password"
                        inputPlaceholder="Password..."
                        lableText="Password"
                        inputName="password"
                        value={inputValues.email}
                        onInputChange={onChangeHandler}
                    />
                </div>
                <div className="date-picker-wrapper" >
                    <label htmlFor="">Date of Birth:</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
            </div>
            <div className="checkbox-container">
                <div className="checkbox-container__input-wrapper">
                    <input type="checkbox" />
                    <label htmlFor="input">Remember me.</label>
                </div>
            </div>
            <div className="auth-btn-group">
                <button onClick={() => onCancelAuth()}>Cancel</button>
                <button>Register</button>
            </div>
        </div>
    );
}

export default Signup;