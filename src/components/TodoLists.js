import React from "react";
import { useEffect, useState } from "react";
import { getDoingList, getDoneList, getTodolists } from "../data/api";
import { TodoCard } from "./TodoCard";
import '../scss/todolists.scss';
import { TodoItems } from "./TodoItems";
export const TodoLists = ({ filter, isUpdate }) => {

    const [data, setData] = useState(null);
    const [todayData, setTodayData] = useState([]);
    const [yesterdayData, setYesterdayData] = useState([]);
    const [upcomingData, setUpcomingData] = useState([]);

    let [doingData, setDoingData] = useState([]);
    let [doneData, setDoneData] = useState([]);

    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        const now = new Date(Date.now());
        now.setHours(0, 0, 0, 0);
        setCurrentDate(now);

        getTodolists().then((e) => {
            setData(e);

            // for (let i = 0; i < e.length; i++) {
            //     console.log("Now: ", currentDate);

            //     let startDate = new Date(e[i].start_date.substring(0, 10));
            //     let endDate = new Date(e[i].end_date.substring(0, 10));
            //     startDate.setHours(0, 0, 0, 0);
            //     endDate.setHours(0, 0, 0, 0);


            //     const difference_s = Math.abs(currentDate - startDate) / (1000 * 60 * 60 * 24);
            //     const difference_e = Math.abs(currentDate - endDate) / (1000 * 60 * 60 * 24);

            //     console.log("data[i].start_date: ", difference_s, difference_e);
            //     if (difference_s === 0 || difference_e === 0) {
            //         setTodayData(prevArray => [...prevArray, e[i]]);
            //     }
            //     else if (difference_e >= 1) {
            //         setYesterdayData(prevArray => [...prevArray, e[i]]);
            //     }
            //     else if (difference_s > 0) {
            //         setUpcomingData(prevArray => [...prevArray, e[i]]);
            //     }
            // }

        });
        getDoingList().then((e) => {
            setDoingData(e);
        });
        getDoneList().then((e) => {
            setDoneData(e);
        })



    }, [filter, !data && data, !doingData && doingData, !doneData && doneData]);
    // console.log("data", data);
    // console.log("Today", todayData);
    // console.log("Yesterday", yesterdayData);
    // console.log("Upcoming", upcomingData);
    const diff = (date) => {
        let dd = new Date(date.substring(0, 10));

        dd.setHours(0, 0, 0, 0);
        const difference = Math.abs(currentDate - dd) / (1000 * 60 * 60 * 24);
        return difference;
    }

    let today = data && data.filter((e) => {

        const sd = diff(e.start_date);
        const ed = diff(e.end_date);

        console.log("S:: ", sd, "::", ed);
        if (sd === 0 || ed === 0) {
            return e;
        }
    });

    let yesterday = data && data.filter((e) => {

        const sd = diff(e.start_date);
        const ed = diff(e.end_date);

        console.log("S:: ", sd, "::", ed);
        if (ed >= 1) {
            return e;
        }

    })
    let upcoming = data && data.filter((e) => {

        const sd = diff(e.start_date);
        const ed = diff(e.end_date);

        console.log("S:: ", sd, "::", ed);
        if (sd > 1) {
            return e;
        }

    })

    console.log("TT", today);
    return (
        <>
            <section className="todo-section">
                {
                    filter === "All"
                        ? <>
                            <TodoCard title={"Todo"} data={data} />
                            <TodoCard title={"Doing"} data={doingData} />
                            <TodoCard title={"Done"} data={doneData} />
                        </>
                        : filter === "Today"
                            ? <TodoItems data={today} />
                            : filter === "Yesterday"
                                ? <TodoItems data={yesterday} />
                                : <TodoItems data={upcoming} />


                }
            </section>
        </>


    )

}