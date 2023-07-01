import React, { useEffect, useState } from "react";
import { HiOutlineTrash, HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { TodoItem } from "./TodoItem";
import '../scss/todolists.scss';

export const TodoItems = ({ data }) => {
    const [currentDate, setCurrentDate] = useState();


    return (
        <div className="td-items">
            {
                data && data.map((e, i) => {
                    return (
                        <div key={i} className="td-item">
                            <TodoItem e={e} />
                        </div>
                    )
                })
            }
        </div>
    )
}