import React from 'react'

const ProductForm = (props) => {
    const { changeHandler, product, submissionSwitch } = props;

    return (
    <form className="flex flex-col gap-3 rounded shadow p-5" onSubmit={submissionSwitch}>
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
  )
}

export default ProductForm