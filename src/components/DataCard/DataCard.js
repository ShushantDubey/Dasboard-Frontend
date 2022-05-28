import React from "react";
import "../DataCard/DataCard.scss"

function DataCard (props) {
    return(
        <div className="data__card">
            <div className="number__data">
            <span>{props.data}</span>
            <img src={props.source} alt="watch" />
            </div>
            <p>{props.label}</p>
        </div>
    );
}

export default DataCard;
