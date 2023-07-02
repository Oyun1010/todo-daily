import React from "react";
import { useEffect, useState } from "react";
import { getDoingList, getDoneList, getTodolists } from "../data/api";
import { TodoCard } from "./TodoCard";
import '../scss/todolists.scss';
import { TodoItems } from "./TodoItems";
import { EmptyItem } from "./EmptyItem";

export const TodoLists = ({ filter, isUpdate }) => {

    const [data, setData] = useState(null);
    // let [todayData, setTodayData] = useState([]);
    // let [yesterdayData, setYesterdayData] = useState([]);
    // let [upcomingData, setUpcomingData] = useState([]);

    let [doingData, setDoingData] = useState(null);
    let [doneData, setDoneData] = useState(null);

    const [currentDate, setCurrentDate] = useState();


    useEffect(() => {
        const now = new Date(Date.now());

        setCurrentDate(now.getTime());

        getTodolists().then((e) => {
            setData(e);

        });
        getDoingList().then((e) => {
            setDoingData(e);
        });
        getDoneList().then((e) => {
            setDoneData(e);
        })



    }, [filter, data]);


    let today = data && data.filter((e) => {

        const sdate = new Date(e.start_date).getDay();
        const edate = new Date(e.end_date).getDay();
        // console.log("S: ", sdate, "E:", edate);
        // console.log("NOW: ", now.getDay());
        if (sdate === 0 && edate === 0) {
            return e;
        }
    });

    let yesterday = data && data.filter((e) => {

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
        // if (edate == null) {
        //     if (sdate < currentDate) {
        //         return e;
        //     }
        // }

    });

    let upcoming = data && data.filter((e) => {
        const sdate = new Date(e.start_date).getTime();

        if (sdate > currentDate) {
            return e;
        }

    })


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
                            ? (today.length === 0 ? <EmptyItem /> : <TodoItems data={today} />)
                            : filter === "Yesterday"
                                ? (yesterday.length === 0 ? <EmptyItem /> : <TodoItems data={yesterday} />)
                                : (upcoming.length === 0 ? <EmptyItem /> : <TodoItems data={upcoming} />)


                }
            </section>
        </>


    )

}