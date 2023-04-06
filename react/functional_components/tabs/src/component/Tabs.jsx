import React, { useState } from 'react';
import "./component.css";

const Tabs = (props) => {

    const { allTabs, currentTabIdx, setCurrentTabIdx } = props;

    const setSelectedTab = (index) => {
        setCurrentTabIdx(index);
    }

    const tabStyle = (index) => {
        if (index == currentTabIdx) {
            return "selected";
        } else {
            return "non-selected";
        }
    }

    return (
        <div className="tabs-con">
            {
                allTabs.map((item, index) =>(
                    <div
                        className={`tab ${tabStyle(index)}`}
                        onClick={(e)=>setSelectedTab(index) }>
                        {item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;