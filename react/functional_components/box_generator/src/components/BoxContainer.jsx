import React, { useState } from 'react';
import "./BoxForm.css"

const BoxContainer = (props) => {
    
    const { list } = props;
    console.log(list);
    return (
        <div className="box-con">
            {
                list.map((b) => (
                    <p className="box" style={{backgroundColor: b.color, height: b.height+"px", width: b.width+"px"}}></p>
                ))
            }
        </div>
    )
}

export default BoxContainer;