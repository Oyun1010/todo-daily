import React from "react";
import { Link } from "react-router-dom";
import { LoginItem } from "../components/LoginItem";
import bg from '../images/home-bg-1.jpg';
import google from '../images/google.png';
import github from '../images/github.png';

const Register = () => {
    return (
        <main className="login">
            <img src={bg} className="background" alt="bg" />
            <section>
                <h1>Sign up</h1>
                <LoginItem icon_src={google} text={"Google"} />
                <LoginItem icon_src={github} text={"Github"} />

                <div>
                    <p>Already have an account? <b><Link to="/login">Sign in</Link></b></p>
                </div>
            </section>
        </main>
    )
}

export default Register;