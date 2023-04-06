import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxContainer from "./components/BoxContainer";

function App() {
  const [list, setList] = useState([]);
  const [width, setWidth] = useState("");
  return (
    <div className="App">
      <BoxForm list={list} setList={setList} width={ width } setWidth={setWidth} />
      <BoxContainer list={list} width={width} />
    </div>
  );
}

export default App;
