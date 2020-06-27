import React from "react";
import Card from "./CardSave";
import { data } from "../../data";

const CardList = () => {
    return data.map(app => {
        return (
            <Card />
        );
    });
};

export default CardList;