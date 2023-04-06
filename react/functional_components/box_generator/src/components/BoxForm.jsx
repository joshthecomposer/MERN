import React, { useState } from 'react';
import "./BoxForm.css";

const BoxForm = (props) => {
    console.log(props);
    const { list, setList} = props; //destructures into the names we need instead of using props.
    const [box, setBox] = useState({
        width: 0,
        height: 0,
        color: ""
    });

    const changeHandler = (e) => {
        setBox({...box, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setList([...list, box])
        setBox({
            color: "",
            height: 0,
            width: 0
        });
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" onChange={changeHandler} value={ box.color } />
                <input type="number" onChange={changeHandler} name="width" value={ box.width } />
                <input type="number" onChange={changeHandler} name="height" value={ box.height } />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default BoxForm;