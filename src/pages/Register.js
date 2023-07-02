import React from "react";
import { Link } from "react-router-dom";
import { LoginItem } from "../components/LoginItem";
import bg from '../images/home-bg-1.jpg';
import { ToastContainer } from "react-toastify";
import { register } from "../data/api";
import { toastMessage } from "../components/Toast";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <>
            <ToastContainer
            />
            <main className="login">

                <img src={bg} className="background" alt="bg" />
                <section>
                    <Logo />
                    <h1>Sign up</h1>

                    {/* <LoginItem icon_src={github} text={"Github"} /> */}
                    <LoginItem
                        googleSuccess={credentialResponse => {

                            register(credentialResponse.credential).then((val) => {
                                console.log("------------", val);
                                if (val === "logged") {
                                    toastMessage('🦄 Signup successful!');
                                    navigate('/home');

                                }
                                else {
                                    toastMessage("🦄 Email is already used.");
                                }
                            })
                        }}
                        githubSuccess={response => console.log(response)} />


                    <span>Already have an account? <b><Link to="/login">Sign in</Link></b></span>

                </section>
            </main>
        </>
    )
}

export default Register;