import React from "react";
import '../scss/login.scss';

export const LoginItem = ({ icon_src, text }) => {
    return (
        <div className="item">
            <img src={icon_src} alt="icon" width={35} height={35}/>
            <p>Continue using {text}</p>
        </div>
    )
}