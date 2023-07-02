import React from "react";
import { useState, useEffect } from "react";
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
import { getTodolists } from "../data/api";
import '../scss/home.scss';
import '../scss/styles.scss';

const Home = () => {

    const [data, setData] = useState(null);
    const [filter, setFilter] = useState("All");
    const [modalIsOpen, setIsOpen] = useState(false);


    const [currentDate, setCurrentDate] = useState();


    useEffect(() => {
        const now = new Date(Date.now());

        setCurrentDate(now.getTime());

        getTodolists().then((e) => {
            setData(e);

        });




    }, [data]);

    let todayData = data && data.filter((e) => {
        const sdate = new Date(e.start_date).getDay();
        const edate = new Date(e.end_date).getDay();
        if (sdate === 0 && edate === 0) {
            return e;
        }
    });

    let yesterdayData = data && data.filter((e) => {

        const sdate = new Date(e.start_date).getTime();
        const edate = new Date(e.end_date).getTime();
        const sday = new Date(e.start_date).getDay();
        const eday = new Date(e.end_date).getDay();
        // console.log("S: ", sdate, "E:", edate);
        // console.log("NOW: ", now.getDay());
        if (sday !== 0 && eday !== 0) {
            if (edate < currentDate) {
                return e;
            }
        }
    });

    let upcomingData = data && data.filter((e) => {
        const sdate = new Date(e.start_date).getTime();

        if (sdate > currentDate) {
            return e;
        }


    });

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
                                        textAlign: "center",

                                        backgroundImage: e === filter ? "linear-gradient(#f3415f, #f33b7b)" : null
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
                    <AsideItem name={"Today"} icon={todoy_icon} count={todayData ? todayData.length : 0} />
                    <AsideItem name={"Yesterday"} icon={yesterday_icon} count={yesterdayData ? yesterdayData.length : 0} />
                    <AsideItem name={"Upcoming"} icon={upcoming_icon} count={upcomingData ? upcomingData.length : 0} />

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