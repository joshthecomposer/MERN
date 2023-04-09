import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Form from '../component/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const NewAuthor = (props) => {
    const { author, setAuthor, errors, setErrors } = props;
    const navigate = useNavigate();
    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", author)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                setErrors([...errors, err.response.data.message])
            });
        setAuthor({
            name:""
        })
    }
    useEffect(() => {
        setAuthor({ name: "" });
    },[])
    return (
        <>
            <Link className="text-blue-600 underline" to="/" >Home</Link>
            <Form author={author} setAuthor={setAuthor} action={createAuthor} errors={errors} setErrors={setErrors}/>
        </>
    )
}

export default NewAuthor