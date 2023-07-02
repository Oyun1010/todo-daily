import React, { useEffect, useState } from "react";
import '../scss/styles.scss';
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { logout } from "../data/api";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../data/api";

export const Header = () => {

   const navigate = useNavigate();
   const [userData, setUserData] = useState(null);
   useEffect(() => {
      getUserData().then((data) => {
         setUserData(data);

      });



   }, []);
   return (
      <header className="header">
         <Logo />
         {/* <div className="home-item">Home</div> */}
         <div className="action">
            <Link to="/profile">
               <span className="pro">
                  {
                     userData &&
                     <>
                        <img src={userData.profile_pic} alt="pro" width={35} height={35} />
                        <p>{userData.name}</p>
                     </>
                  }

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