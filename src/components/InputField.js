import React from "react";
import '../scss/styles.scss';
export const InputField = ({ label, type, placeHolder, value, changed }) => {

    return (
        <div className="input-field">
            <p className="label">{label}</p>
            <input type={type} placeholder={placeHolder} value={value} onChange={changed} />
        </div>
    )
}