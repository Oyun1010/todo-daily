import React, { useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { EmptyItem } from "./EmptyItem";
import '../scss/todolists.scss';

export const TodoCard = ({ title, data }) => {
    
    return (
        <div className="card">
            <div className="head">
                <h1>{title}</h1>
                <p>{data && data.length}</p>
            </div>
            {
                !data && <EmptyItem />
            }
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