import React, { useState, useEffect } from 'react'
import DisplayProducts from './DisplayProducts'
import axios from 'axios'

const ProductForm = (props) => {
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
            <form className="flex flex-col gap-3 rounded shadow p-5" onSubmit={submitHandler}>
                <h2 className="text-center text-2xl bold">Create a Product</h2>
                <div className="flex flex-col">
                    <label>Title</label>
                    <input className="border-2 rounded px-2" type="text" name='title' onChange={changeHandler} value={product.title} />
                </div>
                <div className="flex flex-col">
                    <label>Price</label>
                    <input className="border-2 rounded px-2" type="number" name="price" onChange={changeHandler} value={product.price} />
                </div>
                <div className="flex flex-col">
                    <label>Description</label>
                    <textarea className="border-2 rounded p-1" id="" cols="30" rows="5" name="description" onChange={changeHandler} value={product.description}></textarea>
                </div>
                <input className="bg-indigo-500 rounded py-1 text-white hover:cursor-pointer hover:bg-indigo-400" type="submit" value="Submit" />
            </form>
            <DisplayProducts products={products} setProducts={setProducts} />
        </div>
    )
}

export default ProductForm