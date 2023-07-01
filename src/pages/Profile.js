import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { IoIosCamera } from "react-icons/io";
import { InputField } from "../components/InputField";
import { Background } from "../components/Background";
import { getUserData, updateUserData } from "../data/api";
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import '../scss/profile.scss';

const Profile = () => {

    const [uploadImg, setUploadImg] = useState();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");

    const [userData, setUserData] = useState(null);

    function getImageFileObject(imageFile) {
        setUploadImg(imageFile);
        console.log({ imageFile })
    }

    function runAfterImageDelete(file) {
        console.log({ file })
    }

    useEffect(() => {
        getUserData().then((data) => {
            setUserData(data);
            setName(data.name);
            setUploadImg(data.profile_pic);
            setUserName(data.user_name);
        });



    }, []);

    return (
        <div id="profile">
            <Header />
            <Background />

            <h1>Profile</h1>
            <div className="profile-body">

                <div className="section">
                    <div className="avatar">
                        <img src={uploadImg} width={150} height={150} alt="profile" />
                        <ImageUploader
                            style={{
                                height: 45, width: 45,
                                minHeight: 0,
                                minWidth: 0,
                                backgroundColor: "#ffffff54",
                                borderRadius: "0.8rem",
                                position: "absolute",
                                bottom: "0.5vw",
                                right: "0.5vw",
                            }}
                            className="camera-icon"
                            onFileAdded={(img) => getImageFileObject(img)}
                            onFileRemoved={(img) => runAfterImageDelete(img)}
                            deleteIcon={<></>}
                            uploadIcon={<IoIosCamera size={35}/>}
                        />

                    </div>
                    <InputField label={"Name"} type={"text"} placeHolder={"Name"} value={name} changed={(e) => setName(e.target.value)} />
                    <InputField label={"Username"} type={"text"} placeHolder={"Username"} value={userName} changed={(e) => setUserName(e.target.value)} />

                    <div className="btns">
                        <button className="apply-btn" onClick={() => {
                            updateUserData(name, uploadImg, userName);
                        }}>Apply</button>
                        <button className="cancel-btn" onClick={() => {
                            setName(userData.name);
                            setUploadImg(userData.profile_pic);
                            setUserName(userData.userName);
                        }}>Cancel</button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Profile;