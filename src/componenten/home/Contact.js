import Input from "../../common/Input";
import { useState } from "react";

function Contact() {
    const [inputValues, setInputValues] = useState({ name: "", email: "" });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInputValues({
            ...inputValues,
            [e.target.name]: value,
        });
    };

    return (
        <div className="contact-container" id="contact-section">
            <h1>Schrijf je in voor de nieuwsbrief en ben altijd op de hoogte! </h1>

            <div className="contact-container__input-wrapper">
                <Input
                    inputType="text"
                    inputPlaceholder="Naam..."
                    lableText="Naam"
                    inputName="name"
                    value={inputValues.name}
                    onInputChange={onChangeHandler}
                />
                <Input
                    inputType="Email"
                    inputPlaceholder="Email..."
                    lableText="Email"
                    inputName="email"
                    value={inputValues.email}
                    onInputChange={onChangeHandler}
                />

                <div>
                    <button>Inschrijven</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
