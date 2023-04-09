import React, { useState, useEffect } from 'react'
import DisplayProducts from './DisplayProducts'
import ProductForm from './ProductForm'
import axios from 'axios'

const Home = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const [products, setProducts] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title: product.title,
            price: product.price,
            description:product.description
        })
            .then(res => {
            console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        setProduct({
            title: "",
            price: 0,
            description:""
        })
    }
    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }
    return (
        <div className="flex flex-col items-center p-20 gap-5">
            <ProductForm changeHandler={changeHandler} submissionSwitch={ submitHandler } product={ product } setProduct={ setProduct } />
            <DisplayProducts products={products} setProducts={setProducts} />
        </div>
    )
}

export default Home