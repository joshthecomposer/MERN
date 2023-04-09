import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateForm = () => {
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
        <form className="flex flex-col gap-3 rounded shadow p-5" onSubmit={updateProduct}>
              <h2 className="text-center text-2xl bold">Update Product</h2>
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
    </div>
    )
}

export default UpdateForm