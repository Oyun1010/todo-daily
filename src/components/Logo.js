import React from "react";
import logo_img from '../gif/home-gif.gif'
import '../scss/styles.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo_img} alt="logo" width={50} height={50} />
            <p>TodoDaily</p>

        </div>)
}