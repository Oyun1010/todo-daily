import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { IoIosCamera } from "react-icons/io";
import { InputField } from "../components/InputField";
import { Background } from "../components/Background";
import { getUserData, updateUserData } from "../data/api";
import ImageUploader from 'react-image-upload';
import { ToastContainer } from "react-toastify";
import { toastMessage } from "../components/Toast";
import 'react-image-upload/dist/index.css'
import '../scss/profile.scss';

const Profile = () => {

    const [profile, setProfile] = useState();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");

    const [userData, setUserData] = useState(null);

    function getImageFileObject(imageFile) {
        // setUploadImg(imageFile);
        console.log({ imageFile });
        var reader = new FileReader();
        reader.readAsDataURL(imageFile.target.file);
        reader.onload = () => {
            console.log(reader.result);
        }
    }

    function runAfterImageDelete(file) {
        console.log({ file })
    }

    const converToBase64 = (e) => {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setProfile(reader.result);
        }
        reader.onerror = (error) => {
            console.log("error", error);
        };
    }
    useEffect(() => {
        getUserData().then((data) => {
            setUserData(data);
            setName(data.name);
            setProfile(data.profile_pic);
            setUserName(data.user_name);
        });



    }, []);

    return (
        <div id="profile">
            <Header />
            <Background />


            <div className="profile-body">

                <div className="section">
                    <h1>Profile</h1>
                    <div className="avatar">
                        <img src={profile} width={150} height={150} alt="profile" />
                        <div className="custom-file-upload">

                            <label for="files" className="camera-icon"><IoIosCamera size={40} /></label>
                            <input  accept="image/*" type="file" onChange={converToBase64} />

                        </div>

                        {/* <ImageUploader
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
                            uploadIcon={<IoIosCamera size={35} />}
                        /> */}

                    </div>
                    <InputField label={"Name"} type={"text"} placeHolder={"Name"} value={name} changed={(e) => setName(e.target.value)} />
                    <InputField label={"Username"} type={"text"} placeHolder={"Username"} value={userName} changed={(e) => setUserName(e.target.value)} />

                    <div className="btns">
                        <button className="apply-btn" onClick={() => {
                            toastMessage("Changes saved");
                            updateUserData(name, profile, userName);
                        }}>Apply</button>
                        <button className="cancel-btn" onClick={() => {
                            setName(userData.name);
                            setProfile(userData.profile_pic);
                            setUserName(userData.userName);

                        }}>Cancel</button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Profile;