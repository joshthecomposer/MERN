import React from 'react';
import "./component.css";
import SubContent from "./SubContent";
import Advertisement from './Advertisement';
import NavBar from "./NavBar";

const Main = (props) => {
    return (
        <div className="main-content">
            <NavBar />
            <div className="red-box">
                <div className="yellows">
                    <SubContent/>
                    <SubContent/>
                    <SubContent/>
                </div>
                <Advertisement />
            </div>
        </div>
    )
}

export default Main;