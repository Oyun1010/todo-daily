import React from "react";
import '../scss/styles.scss';
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { logout } from "../data/api";
import { useNavigate } from "react-router-dom";

export const Header = () => {

   const navigate = useNavigate();

   return (
      <header className="header">
         <Logo />
         {/* <div className="home-item">Home</div> */}
         <div className="action">
            <Link to="/profile">
               <span className="pro">
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="pro" width={35} height={35} />
                  <p>Oyunsuren</p>
               </span>
            </Link>

            <span className="logout-icon"
               onClick={() => {
                  logout();
                  navigate("/");

               }}><IoMdLogOut size={24} /></span>
            {/* <div className="dropdown">
               <div className="dropdown-list">
                  <div className="dropdown-list-item"><Link to="/profile">Profile</Link></div>
                  <div className="dropdown-list-item"><Link to="/settings">Settings</Link></div>
                  <div className="dropdown-list-item"><Link to="/main">Logout</Link></div>
               </div>

            </div> */}
         </div>



      </header>
   )
}