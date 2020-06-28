import React from "react";
// import Card from "./Card";
// import { data } from "../../data";

const CardList = ({ children }) => {
    // return data.map(app => {
    //     return (
    //         <Card {...app} key={app.name} />
    //     );
    // });
    return <li className="list-group-item">{children}</li>
};

export default CardList;