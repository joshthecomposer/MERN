import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    },[product])
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl bold uppercase">{product.title}</h1>
            <p className="text-lg">{ product.description}</p>
        </div>
    )
}

export default Details