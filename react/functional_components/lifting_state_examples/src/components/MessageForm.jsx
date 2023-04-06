import React, { useState } from "react";

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //What to do with the message?
        props.onNewMessage(msg);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter your message here"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                ></textarea>
                <input type="submit" value="Send Message" />
            </div>
        </form>
    )
}

export default MessageForm;