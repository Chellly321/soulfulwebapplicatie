import Input from "../../common/Input";
import { useState } from "react";

function ContactForm() {
    const [inputValues, setInputValues] = useState({ name: "", email: "", description: "" });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInputValues({
            ...inputValues,
            [e.target.name]: value,
        });
    };

    console.log(inputValues);

    return (
        <div className="contact-form-container">
            <div className="contact-form-container__wrapper">
                <h1>
                    Heb je vragen? <br /> Neem dan gerust contact met me op!
                </h1>
                <div className="contact-form-container__input-wrapper">
                    <div className="contact-form-container__input">
                        <Input
                            inputType="text"
                            inputPlaceholder="Naam..."
                            lableText="Naam"
                            inputName="name"
                            value={inputValues.name}
                            onInputChange={onChangeHandler}
                            borderColor="#B08050"
                        />
                    </div>
                    <div className="contact-form-container__input">
                        <Input
                            inputType="Email"
                            inputPlaceholder="Email..."
                            lableText="Email"
                            inputName="email"
                            value={inputValues.email}
                            onInputChange={onChangeHandler}
                            borderColor="#B08050"
                        />
                    </div>
                    <div className="form-container__textarea">
                        <label htmlFor="text-area">Je bericht:</label>
                        <textarea name="description" onChange={onChangeHandler}/>
                    </div>
                    <div className="form-container__btn">
                        <button>Verzenden</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;