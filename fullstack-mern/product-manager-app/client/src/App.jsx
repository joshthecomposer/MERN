import './App.css'
import ProductForm from './component/ProductForm'
import Details from "./component/Details"
import NavBar from './component/NavBar'
import UpdateForm from './component/UpdateForm'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ProductForm products={products} setProducts={setProducts} /> } />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products/edit/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  )
}

export default App
