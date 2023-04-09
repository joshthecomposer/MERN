import React,{useEffect} from 'react'
import Form from '../component/Form'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditAuthor = (props) => {
    const { author, setAuthor, errors, setErrors } = props;
    const { id } = useParams();
    const navigate = useNavigate();
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/" + id, author)
            .then(res => {
                setAuthor(res.data);
                navigate("/")
            })
            .catch(err => setErrors([...errors, err.response.data.message]));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => setAuthor({ name: res.data.name }))
            .catch(err => err);
    },[])
    return (
        <>
            <Link className="text-blue-600 underline" to="/">Home</Link>
            <Form author={author} setAuthor={setAuthor} action={ updateAuthor } errors={errors} setErrors={setErrors} />
        </>
    )
}

export default EditAuthor