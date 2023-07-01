import React from "react";
import { TodoItem } from "./TodoItem";
import '../scss/todolists.scss';

export const TodoItems = ({ data }) => {
  
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