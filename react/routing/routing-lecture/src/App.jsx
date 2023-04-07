import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./component/Home"
import About from "./component/About"
import Word from "./component/Word"
import './App.css'

function App() {

  return (
    <div>
      <h1>REACC??</h1>
      {/* HAS TO BE INSIDE BROWSER ROUTER */}
      <Link to={'/home'} className="text-blue-500">Home</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/word/:userWord' element={ <Word /> } />
      </Routes>
    </div>
  )
}
export default App
