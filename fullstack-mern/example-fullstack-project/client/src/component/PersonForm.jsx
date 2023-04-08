import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PersonForm = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null); //TODO: Make this fields into a user object instead with a changehandler.
    const [currentUser, setCurrentUser] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/people", {
            firstName,
            lastName
        })
            .then(res => setCurrentUser(res.data))
            .catch(err=>console.log(err))
    }
    return (
        <div className="flex justify-center items-center flex-col">
            <form className='p-5 rounded my-20 shadow flex flex-col gap-3' onSubmit={onSubmitHandler}>
                <div className="flex flex-col">
                    <label>First Name</label>
                    <input className="border-2 rounded" type="text" onChange ={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label>Last Name</label>
                    <input className="border-2 rounded" type="text" onChange ={(e)=>setLastName(e.target.value)} />
                </div>
                <input className="bg-indigo-500 rounded text-white py-1 hover:bg-indigo-400 hover:cursor-pointer" type="submit" value="Submit" />
            </form>
            <p>{ currentUser.firstName} { currentUser.lastName}</p>
        </div>
  )
}

export default PersonForm