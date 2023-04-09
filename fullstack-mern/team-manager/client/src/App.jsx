import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './component/Form'
import DisplayPlayers from './view/DisplayPlayers'
import NavBar from './component/NavBar'
import GameManager from './view/GameManager'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
        .then(res => setAllPlayers(res.data))
        .catch(err => console.log(err));
  },[allPlayers])
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/manager" element={<GameManager allPlayers={allPlayers} setAllPlayers={setAllPlayers} /> } />
        <Route path="/" element={ <DisplayPlayers allPlayers={allPlayers} setAllPlayers={setAllPlayers} /> } />
        <Route path="/new" element={ <Form /> } />
      </Routes>
    </>
  )
}

export default App
