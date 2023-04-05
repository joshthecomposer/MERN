import React, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [usernameError, setUsernameError] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();

    //     const newUser = { username, email, password };
    //     setUsername("");
    //     setEmail("");
    //     setPassword("");

    //     setHasBeenSubmitted(true);

    // }

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 1) {
            setUsernameError("Username is required");
        } else if(e.target.value.length<3) {
            setUsernameError("Must be 3 characters or more!");
        } else {
            setUsernameError("");
        }
    }
    // // const formMessage = () => {
    // //     if (hasBeenSubmitted) {
    // //         return "Thank you for submitting the form!";
    // //     } else {
    // //         return "Welcome, please submit the form";
    // //     }
    // }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={handleUsername} value={ username } />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={ password } />
                </div> 
                {
                    usernameError ?
                    <input type="submit" value="Create User" disabled /> :
                    <input type="submit" value="Create User" />

                }
            </form>
            <h1>Your form data in real time:</h1>
            <p>UserName: { username }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
        </div>
    );
}

export default UserForm;