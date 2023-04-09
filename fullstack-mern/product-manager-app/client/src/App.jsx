import './App.css'
import Home from './component/Home'
import Details from "./component/Details"
import NavBar from './component/NavBar'
import UpdateProduct from './component/UpdateProduct'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home products={products} setProducts={setProducts} /> } />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products/edit/:id" element={<UpdateProduct />} />
      </Routes>
    </div>
  )
}

export default App
