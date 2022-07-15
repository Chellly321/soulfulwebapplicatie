function Input({
                   inputType,
                   inputPlaceholder,
                   inputValue,
                   onInputChange,
                   lableText,
                   inputName,
               }) {
    return (
        <div className="input-container">
            <label htmlFor="input">{lableText}</label>
            <input
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