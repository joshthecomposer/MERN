import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import NewAuthor from "./view/NewAuthor"
import EditAuthor from "./view/EditAuthor"
import './App.css'
import { useState } from 'react'

function App() {
  const [author, setAuthor] = useState({
    name: ''
  });
  const [errors, setErrors] = useState([]);
  return (
    <>

      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Home setErrors={setErrors} />} />
        <Route path="/new" element={<NewAuthor author={author} setAuthor={setAuthor} errors={errors} setErrors={setErrors} />} />
        <Route path="/edit/:id" element={ <EditAuthor author={author} setAuthor={setAuthor} errors={errors} setErrors={setErrors} />} />
      </Routes>
      {
        errors.map((error) => (
          <p className="bg-red-500 text-white text-center">{ error }</p>
        ))
      }
    </>
  )
}

export default App
