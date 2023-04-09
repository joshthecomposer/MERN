import React,{useState, useEffect, useLayoutEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

const Home = (props) => {
    const { setErrors } = props;
    const [authors, setAuthors] = useState([]);
    const [sortState, setSortState] = useState(0);
    useEffect(() => {
        setErrors([]);
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                if (sortState === 1) {
                    setAuthors(res.data.sort((a, b) => a.name.localeCompare(b.name)));
                } else if(sortState === 2) {
                    setAuthors(res.data.sort((a, b) => b.name.localeCompare(a.name)));
                } else {
                    setAuthors(res.data);
                }
            })
            .catch(err => console.log(err));
    }, [authors, sortState])
    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <Link className="text-blue-600 underline" to="/new">Add an Author</Link>
            <h2>We have quotes by:</h2>
            <table className="text-center border-seperate border-spacing-2 border border-slate-500">
                <thead>
                    <tr>
                        <th className="border-slate-600 border-2 px-2">Author</th>
                        <th className="border-slate-600 border-2 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((a) => (
                            <tr key={a._id}>
                                <td className="border-slate-500 border-2 px-2">{ a.name }</td>
                                <td className="border-slate-500 border-2">
                                    <button className="bg-indigo-500 text-white px-5">
                                        <Link to={`/edit/`+a._id} className="">Edit</Link>
                                    </button>
                                    <button className="bg-red-500 text-white px-5" onClick={()=>deleteAuthor(a._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className="rounded bg-blue-500 mt-5 px-10" onClick={()=>setSortState(1)}>Sort Alphabetically</button>
            <button className="rounded bg-gray-500 mt-5 px-10" onClick={()=>setSortState(2)}>Sort Descending Alpha</button>
        </>
    )
}

export default Home