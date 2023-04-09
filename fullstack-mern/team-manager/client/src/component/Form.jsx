import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Form(props) {
    const [player, setPlayer] = useState({
        firstName: "",
        lastName: "",
        position: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", player)
            .then(res => {
                console.log(res.status);
                res.status < 300 ?
                    navigate("/") :
                    null
            })
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    }
    return (
        <div className="flex justify-center p-10">
            <form className="rounded shadow p-5 flex flex-col w-full md:w-1/3 gap-2" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold">Add a Player</h2>
                <div className="flex flex-col gap-1">
                    <div className="">
                        <label>First Name</label>
                        {
                            errors.firstName ? 
                                <span className="text-xs w-full text-red-500 ml-2">{ errors.firstName.message }</span> :
                                null
                        }
                    </div>
                        <input
                            type="text"
                            className="border-2 rounded"
                            onChange={handleChange}
                            value={player.firstName}
                            name="firstName" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="">
                            <label>Last Name</label>
                            {
                                errors.lastName ? 
                                    <span className="text-xs w-full text-red-500 ml-2">{ errors.lastName.message }</span> :
                                    null
                            }
                    </div>
                    <input
                        type="text"
                        className="border-2 rounded"
                        onChange={handleChange}
                        value={player.lastName}
                        name="lastName" />
                </div>
                <div className="flex flex-col gap-1">
                <div className="">
                            <label>Position</label>
                            {
                                errors.position ? 
                                    <span className="text-xs w-full text-red-500 ml-2">{ errors.position.message }</span> :
                                    null
                            }
                    </div>
                    <select
                        type="text"
                        className="border-2 rounded"
                        onChange={handleChange}
                        name="position"
                        defaultValue={player.position}>
                            <option value="">Choose a position</option>
                            <option value="striker">Striker</option>
                            <option value="center forward">Center Forward</option>
                            <option value="left wing">Left Wing</option>
                            <option value="central midfielder">Central Midfielder</option>
                            <option value="stopper">Stopper</option>
                            <option value="sweeper">Sweeper</option>
                            <option value="goalkeeper">Goalkeeper</option>
                    </select>
                </div>
                <button type="submit" className="bg-indigo-500 text-white rounded">Submit</button>
            </form>
        </div>
    )
}

export default Form