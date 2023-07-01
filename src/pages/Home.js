import React from "react";
import { useState } from "react";

import '../scss/home.scss';
import '../scss/styles.scss';
import { TodoLists } from "../components/TodoLists";
import todo_img from '../images/todo_list.png';
import { MdFilterList } from "react-icons/md";
import { TodoEdit } from "../components/TodoEdit";
import { TodoItems } from "../components/TodoItems";
import { AsideItem } from "../components/AsideItem";
import { Header } from "../components/Header";
import { Background } from "../components/Background";
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
                            <span className="dropdown-list-item">All</span>
                            <span className="dropdown-list-item">Today</span>
                            <span className="dropdown-list-item">Yesterday</span>
                            <span className="dropdown-list-item">Upcoming</span>
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
                    <AsideItem name={"Today"} />
                    <AsideItem name={"Yesterday"} />
                    <AsideItem name={"Upcoming"} />

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