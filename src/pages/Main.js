import React from "react";
import { Link } from "react-router-dom";
import homebg from '../images/home-bg-1.jpg';
import home_gif from '../gif/home-gif.gif';
import gif_0 from '../gif/ani.gif';
import img_0 from '../images/dazzle-task-management.png';
import img_1 from '../images/clip-147.png';
import img_2 from '../images/bonbon-online-meeting-hands-doing-work-tasks-1.png';
import img_3 from '../images/quirky-refresh-symbol-1.png';
import img_4 from '../images/dazzle-task-management.png';
import { Logo } from "../components/Logo";
import '../scss/main.scss';


export const Item = ({ icon_src, text }) => {
    return (
        <div className="icon-item">
            <img src={icon_src} alt="icon" width={100} height={85} className="circle-imgd" />
            <p>{text}</p>
        </div>
    )
}
const Home = () => {
    // const text = "Don't let your day doing nothing";
    // const characters = text.split('');


    return (
        <main id="main">
            <header className="header">
                <Logo />
                <div className="links">
                    <span><Link to="/login">Sign in</Link></span>
                    <span><Link to="/register">Sing up</Link></span>
                </div>

            </header>
            <section className="home-section">
                <img src={homebg} alt="home-bg" className="home-bg" />
                <div className="contain">
                    <h1>Organizing your day activity with Todo Daily</h1>
                    <button><Link to="/login">Get started</Link></button>
                    <div className="home-gif">
                        <img src={home_gif} alt="home-bg" />
                    </div>

                </div>
            </section>
            <section className="home-section-1">

                <h1>
                    Don't let yout day doing nothing
                    {/* {characters.map((char, i) => {
                        if (i < characters.length / 2) {
                            return (
                                <span
                                    key={`heading-span-${i}`}
                                    className="char primary"
                                    style={{
                                        top: i * 5 + "px",


                                    }}
                                >
                                    {char}
                                </span>
                            )
                        }
                        else {
                            return (
                                <span
                                    key={`heading-span-${i}`}
                                    className="char second"
                                    style={{

                                        top: (i * 5) + "px",

                                        // transformOrigin: `70px ${180}px 70px`,
                                    }}
                                >
                                    {char}
                                </span>
                            )
                        }

                    })} */}
                </h1>
                <div className="contain-items">
                    <Item icon_src={img_0} text={"Small task"} />
                    <Item icon_src={img_1} text={"Write it"} />
                    <Item icon_src={img_2} text={"Do it"} />
                    <Item icon_src={img_3} text={"Repeat"} />

                </div>
            </section>
            <section className="home-section-2">
                <div>
                    <img src={gif_0} alt="img" />
                </div>
                <div>
                    <h1>Achieve your target and won your life</h1>
                    <button><Link to="/login">Get started</Link></button>
                </div>
            </section>
        </main>

    )
}

export default Home;