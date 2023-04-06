import React, { useState } from 'react';

const NewForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");

        setHasBeenSubmitted(true);
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First name is required.");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 chars.")
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last name is required.");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 chars.")
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 chars")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 chars");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password) {
            setConfirmError("Passwords must match.");
        } else {
            setConfirmError("");
        }
    }
    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h1>Thank you for submitting the form!</h1> :
                        <h1>Welcome, pls submitty ty.</h1>
                }

                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName} value={firstName} />
                    <span>{firstNameError}</span>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastName} value={lastName} />
                    <span>{ lastNameError }</span>
                </div>
                <div>w
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail} value={email} />
                    <span>{ emailError }</span>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={handlePassword} value={password} />
                    <span>{ passwordError }</span>
                </div>
                <div>
                    <label>Confirm</label>
                    <input type="text" onChange={handleConfirm} value={confirm} />
                    <span>{ confirmError }</span>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewForm;