import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { IoIosCamera } from "react-icons/io";
import { InputField } from "../components/InputField";
import { Background } from "../components/Background";
import { getUserData } from "../data/api";
import '../scss/profile.scss';

const Profile = () => {

    const [uploadImg, setUploadImg] = useState();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getUserData().then((data) => {
            
        })
    })

    return (
        <div id="profile">
            <Header />
            <Background />

            <h1>Profile</h1>
            <div className="profile-body">

                <div className="section">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" width={150} height={150} alt="profile" />
                        <span className="camera-icon"><IoIosCamera size={45} /></span>
                    </div>
                    <InputField label={"Name"} type={"text"} placeHolder={"Name"} value={name} changed={(e) => setName(e.target.value)} />
                    <InputField label={"Username"} type={"text"} placeHolder={"Username"} value={userName} changed={(e) => setUserName(e.target.value)} />

                    <div className="btns">
                        <button className="apply-btn">Apply</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Profile;