import React, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { username, email, password };
        setUsername("");
        setEmail("");
        setPassword("");
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={ username } />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={ password } />
                </div> 
                <input type="submit" value="Create User" />
            </form>
            <h1>Your form data in real time:</h1>
            <p>UserName: { username }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
        </div>
    );
}

export default UserForm;