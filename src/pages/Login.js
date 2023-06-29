import React from "react";
import login_gif from '../gif/login.gif';
import { LoginItem } from "../components/LoginItem";
import bg from '../images/home-bg-1.jpg';
import google from '../images/google.png';
import github from '../images/github.png';
import '../scss/login.scss';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <main className="login">
            <img src={bg} className="background" alt="bg" />
            <section>
                <h1>Sign in</h1>
                <LoginItem icon_src={google} text={"Google"} />
                <LoginItem icon_src={github} text={"Github"} />

                <div>
                    <p>Not have account ? <b><Link to="/register">Signup</Link></b></p>
                </div>
            </section>
        </main>
    )
}

export default Login;