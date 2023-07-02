import React from "react";

export const AsideItem = ({ name, icon, count }) => {
    return (
        <div className="aside-item">
            <img src={icon} width={50} height={50} alt="icon" />
            <div>
                <h4>{name}</h4>
                <p>{count}</p>
            </div>
        </div>
    )
}