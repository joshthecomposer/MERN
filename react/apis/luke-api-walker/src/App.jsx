import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import ApiForm from './component/ApiForm'
import ErrorDisplay from './component/ErrorDisplay'
import Home from './component/Home'
import DisplayResource from './component/DisplayResource'
import './App.css'

function App() {
  // const changeHandler = (e) => {
  //   setUrlParams({...urlParams, [e.target.name]:e.target.value})
  // }
  return (
    <div className="p-10">
      <h1 className="text-4xl uppercase text-center text-bold">Star War API</h1>
      <ApiForm />

        <Routes>
          <Route path="/:resource/:id" element={<DisplayResource />} />
          <Route path="/error" element={<ErrorDisplay />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
