import React from "react";
// import Card from "./Card";
// import { data } from "../../data";

const CardList = (props) => {
    // return data.map(app => {
    //     return (
    //         <Card {...app} key={app.name} />
    //     );
    // });
    return <li className="list-group-item">{props.title}{props.description}</li>
};

export default CardList;