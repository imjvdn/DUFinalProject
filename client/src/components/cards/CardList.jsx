import React from "react";
// import Card from "./Card";
// import { data } from "../../data";
export function List({ children}) {
    return (
    <div className="list-overflow-container">
        <ul className="list-group">{children}
            
        </ul>
    </div>
    )
}

export function CardItem({children}) {
    // return data.map(app => {
    //     return (
    //         <Card {...app} key={app.name} />
    //     );
    // });
    return (
        <div>
            <li className="list-group-item">{children} 
            {/* <br/>
            <p className="list-group-description">{children}</p> */}
            </li>
        </div>
    )
};
