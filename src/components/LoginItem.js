import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import '../scss/login.scss';

export const LoginItem = ({ googleSuccess, githubSuccess, text }) => {
    const cliendId = "1042979000696-6ghssgtt66f9dsmvl17ug2kare44la7p.apps.googleusercontent.com";
    return (
        <div>
            {/* <img src={icon_src} alt="icon" width={35} height={35}/>
            <p>Continue using {text}</p> */}
            <GoogleOAuthProvider clientId={cliendId}>
                <GoogleLogin
                    text="continue_with"
                    size="large"
                    shape="square"
                    width="280px"
                    theme="filled_black"
                    onSuccess={googleSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }} />
                {/* <LoginItem icon_src={google} text={"Google"} /> */}
            </GoogleOAuthProvider>
            {/* <div style={{
                height: "15px"
            }}></div> */}
            {/* <GitHubLogin
                clientId="c769e9594654e33dc3b6"
                onSuccess={githubSuccess}
                onFailure={response => console.error(response)}
            />, */}
        </div>
    )
}