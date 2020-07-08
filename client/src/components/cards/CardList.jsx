import React from "react";
// import Card from "./Card";
// import { data } from "../../data";

const CardList = (props) => {
    // return data.map(app => {
    //     return (
    //         <Card {...app} key={app.name} />
    //     );
    // });
    return (
        <div>
            <li className="list-group-item">{props.title} <br/>
            <p className="list-group-description">{props.description}</p></li>
        </div>
    )
};

export default CardList;