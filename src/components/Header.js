import React from "react";
import '../scss/styles.scss';
import icon from '../images/google.png';

export const Header = () => {
   return (
      <header className="header">
         <div className="logo">
            <p>Todo Daily</p>
         </div>
         <div className="mid">
            <span>Today</span>
            <span>Yesterday</span>
            <span>Upcoming</span>
         </div>
         <div className="action">
            <p>Oyu</p>
            <img className="pro-pic" src={icon} alt="pro" width={45} height={45} />
         </div>
      </header>
   )
}