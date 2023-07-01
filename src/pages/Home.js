import React from "react";
import { useState } from "react";
import { TodoLists } from "../components/TodoLists";
import todo_img from '../images/todo_list.png';
import { MdFilterList } from "react-icons/md";
import { TodoEdit } from "../components/TodoEdit";
import { AsideItem } from "../components/AsideItem";
import { Header } from "../components/Header";
import { Background } from "../components/Background";
import todoy_icon from "../images/today.png";
import yesterday_icon from "../images/yesterday.png";
import upcoming_icon from "../images/upcoming.png";

import '../scss/home.scss';
import '../scss/styles.scss';
// import '../scss/home-bg.scss';


const Home = () => {

    const [filter, setFilter] = useState("All");
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>


            <Header />
            <main id="home">
                <Background />
                <section className="home-section">
                    <span className="dropdown">
                        <div className="dropdown-head">
                            <MdFilterList />
                            <p>filter</p>
                        </div>

                        <div className="dropdown-list">
                            {
                                ["All", "Today", "Yesterday", "Upcoming"].map((e, i) => {
                                    return <span className="dropdown-list-item" key={i} onClick={() => { setFilter(e); }}>
                                        {e}
                                    </span>
                                })
                            }

                        </div>
                    </span>
                    <div className="nav">

                        {
                            ["All", "Today", "Yesterday", "Upcoming"].map((e, i) => {
                                return <span key={i} onClick={() => {
                                    setFilter(e);
                                }}
                                    style={{
                                        backgroundImage: e === filter ? "linear-gradient(#f3415f, #f3415f)" : null
                                    }}>{e}</span>
                            })
                        }

                    </div>
                    <span className="add-btn" onClick={() => {
                        setIsOpen(true);
                    }}>+ new task</span>

                </section>

                <TodoLists filter={filter} />



                <aside>
                    <img src={todo_img} alt="img" width={250} />
                    <AsideItem name={"Today"} icon={todoy_icon} />
                    <AsideItem name={"Yesterday"} icon={yesterday_icon} />
                    <AsideItem name={"Upcoming"} icon={upcoming_icon} />

                </aside>
            </main>
            <TodoEdit
                modalIsOpen={modalIsOpen}
                closeModal={() => {
                    setIsOpen(false);
                }} />
        </>

    )
}

export default Home;