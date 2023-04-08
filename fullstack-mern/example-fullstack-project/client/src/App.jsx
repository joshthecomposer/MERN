import { useState } from 'react'
import './App.css'
import PersonForm from './component/PersonForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PersonForm />
    </div>
  )
}

export default App
