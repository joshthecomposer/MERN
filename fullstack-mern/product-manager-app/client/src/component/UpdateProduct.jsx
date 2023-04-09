import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from './ProductForm';
import axios from 'axios';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description:""
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProduct({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                })
            })
            .catch(err => console.log(err));
    }, [])
    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="flex flex-col items-center p-20 gap-5">
            <ProductForm changeHandler={changeHandler} submissionSwitch={ updateProduct } product={product} setProduct={setProduct} />
        </div>
    )
}

export default UpdateProduct