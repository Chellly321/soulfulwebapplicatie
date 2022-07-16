function Input({
                   inputType,
                   inputPlaceholder,
                   inputValue,
                   onInputChange,
                   lableText,
                   inputName,
                   borderColor,
               }) {
    return (
        <div className="input-container">
            <label htmlFor="input">{lableText}</label>
            <input
                style={{ border: `3px solid ${borderColor}`}}
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={onInputChange}
                name={inputName}
            />
        </div>
    );
}

export default Input;