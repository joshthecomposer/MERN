import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [pokemans, setPokemans] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=800")
      .then(response => { setPokemans(response.data.results) })
  },[])

  return (
    <div className="flex flex-col gap-5 items-center">
      {
        pokemans.map((poke) => (
          <div className="bg-neutral-700 shadow-lg rounded w-48 h-12 flex items-center justify-center">
            <p className=" text-center uppercase text-neutral-100" key={poke.name}>{poke.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App