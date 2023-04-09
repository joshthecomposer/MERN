import React,{useState} from 'react'
import axios from 'axios'

function Form(props) {
    const { action, author, setAuthor, errors } = props;
    const handleChange = (e) => {
        setAuthor({...author, [e.target.name]:e.target.value})
    }
    return (
        <>
            <form className="rounded shadow p-5 flex flex-col w-full md:w-1/3 gap-2" onSubmit={action}>
                <h2>Add an Author</h2>
                <div className="flex flex-col gap-1">
                    <label>Name</label>
                    <input
                        type="text"
                        className="border-2 rounded"
                        onChange={handleChange}
                        value={author.name}
                        name="name" />
                </div>
                <button type="submit" className="bg-indigo-500 text-white rounded">Submit</button>
            </form>
        </>
    )
}

export default Form