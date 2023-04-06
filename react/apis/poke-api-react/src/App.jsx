import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=scotch")
      .then(response => {
        return response.json();
      })
      .then(response => {
        setCocktails(response.drinks)
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  return (
    <div>
      {
        cocktails.map((cock) => (
          <div>
            <p>{cock.strDrink}</p>
            <img src={cock.strDrinkThumb} alt="" width="200px" height="200px" />
          </div>
        ))
      }
    </div>
  )
}

export default App
