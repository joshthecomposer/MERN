import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./component/Home";
import Number from "./component/Number";
import Color from "./component/Color";
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:input' element={<Number />} />
        <Route path='/:input/:txt/:bg' element={<Color />} />
      </Routes>
    </div>
  )
}

export default App
