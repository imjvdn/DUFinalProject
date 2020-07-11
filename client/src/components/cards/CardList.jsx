import React from "react";

export function List({ children}) {
    return (
    <div className="list-overflow-container">
        <ul className="list-group">{children}
            
        </ul>
    </div>
    )
}

export function CardItem({children}) {

    return (
        <div>
            <li className="list-group-item">{children} 
            </li>
        </div>
    )
};
