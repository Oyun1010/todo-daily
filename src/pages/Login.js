import React from "react";
import { LoginItem } from "../components/LoginItem";
import bg from '../images/home-bg-1.jpg';
import '../scss/login.scss';
import { Link } from "react-router-dom";
import { login } from "../data/api";
import { ToastContainer } from "react-toastify";
import { toastMessage } from "../components/Toast";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();
    return (
        <main className="login">
            <ToastContainer />
            <img src={bg} className="background" alt="bg" />
            <section>
                <Logo />
                <h1>Sign in</h1>
                <LoginItem
                    googleSuccess={credentialResponse => {
                        login(credentialResponse.credential).then((val) => {
                            if (val === "logged") {
                                toastMessage('🦄 Login Success!');
                                setTimeout(() => {
                                  
                                      navigate("/home");
                                }, 500);
                              
                            }
                            else toastMessage('🦄 Incorrect username or email.!');
                        })
                    }}
                    githubSuccess={response => console.log(response)}
                />

                <span>Not have account ? <Link to="/register">Signup</Link></span>
            </section>
        </main>
    )
}

export default Login;