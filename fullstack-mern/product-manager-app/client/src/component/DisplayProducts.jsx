import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayProducts = (props) => {
    const {products, setProducts} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, [products])
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-4xl'>All Products</h1>
        <div className="flex gap-3 flex-wrap">
            {
                products.map((p) => (
                    <div key={p._id} className="flex flex-col gap-3 p-5 w-[250px] shadow rounded">
                        <h1 className="uppercase">{p.title}</h1>
                        <p>Price: ${p.price}</p>
                        <p>{p.description}</p>
                        <Link className="rounded bg-purple-500 text-center text-white" to={`/products/${p._id}`}>View Details</Link>
                        <Link className="rounded bg-indigo-500 text-center text-white" to={`/products/edit/${p._id}`}>Edit</Link>
                        <button className="rounded bg-red-500 text-center text-white" onClick={()=>deleteProduct(p._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
      </div>
  )
}

export default DisplayProducts