import React, { useState } from "react";

import { TodoItem } from "./TodoItem";
import '../scss/todolists.scss';
import { updateTodo } from "../data/api";
export const TodoCard = ({ title, data }) => {

   
    return (
        <div className="card">
            <div className="head">
                <h1>{title}</h1>
                <p>{data && data.length}</p>
            </div>
            {
                data && data.map((e, i) => {
                    return (
                        <TodoItem e={e} key={i} />
                    )
                })
            }
        </div>
    )

}