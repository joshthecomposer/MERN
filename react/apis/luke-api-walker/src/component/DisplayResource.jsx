import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const DisplayResource = () => {
    const { resource, id } = useParams();
    const [results, setResults] = useState({});
    const [homeworld, setHomeworld] = useState({});
    const [homeworldId, setHomeworldId] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${resource}/${id}/`)
            .then(response => {
                setResults(response.data);
                if (resource === "people") {
                    getHomeworldId(response.data.homeworld);
                    axios.get(response.data.homeworld)
                        .then(homeworldResponse => {
                            setHomeworld(homeworldResponse.data)
                        })
                        .catch(error => { })
                }
            })
            .catch(error => {
                navigate("/error")
            })
    }, [resource, id, homeworldId]);
    
    const getHomeworldId = (url) => {
        const temp = url.match(/\d+/)
        setHomeworldId(temp)
    }
    return (
        <div className="flex flex-col my-20">
            {
                Object.entries(results).map(([key, value]) => (
                    <p>{` ${key} : ${value} ` }</p>
                ))
            }
            {
                (resource === "people") ?
                    <div>
                    <h1 className="text-xl bold uppercase my-5">Homeworld:</h1>
                        <Link to={`/planets/${homeworldId}`}>{homeworld.name}</Link>
                </div> :
                null
            }
        </div>
    )
}

export default DisplayResource