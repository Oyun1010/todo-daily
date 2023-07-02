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
import { getTodolists, getDoingList, getDoneList } from "../data/api";
import '../scss/home.scss';
import '../scss/styles.scss';
// import '../scss/home-bg.scss';


const Home = () => {

    const [filter, setFilter] = useState("All");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [todayData, setTodayData] = useState(null);
    const [yesterdayData, setYesterdayData] = useState(null);
    const [upcomingData, setUpcomingData] = useState(null);

    // useEffect(() => {


    //     getTodolists().then((e) => {
    //         setTodayData(e);
    //     });
    //     getDoingList().then((e) => {
    //         setUpcomingData(e);
    //     });
    //     getDoneList().then((e) => {
    //         setYesterdayData(e);
    //     })



    // }, [filter, data, doingData, doneData]);
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