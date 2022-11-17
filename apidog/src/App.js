import React, {useState} from 'react';
import './App.css';
import {Select} from './components/Select';
import {Tarjeta} from './components/Tarjeta';

const initialDog = {
  image: "",
  breed: {
    id: "",
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);

  return (
    <div className="app">
      <Select/>
      <Tarjeta dog={dog}/>
    </div>
  );
}

export default App;
