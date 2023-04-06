import React, { useState } from "react";
import "./component.css";

const DisplayContent = (props) => {

    const { allTabs, currentTabIdx } = props;


    return (
        <div className="content-box">
            <p>{allTabs[currentTabIdx].content}</p>
        </div>
    )
}

export default DisplayContent;