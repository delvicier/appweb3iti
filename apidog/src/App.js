import React, {useState, useEffect} from 'react';
import {Select} from './components/Select';
import {Tarjeta} from './components/Tarjeta';
import getDogs from './helpers/getDog';
import getImage from './helpers/getImage';

const initialDog = {
  images: "",
  breed: {
    ids: "",
    names: ""
  }
}

function App() {

  const [dog, setDog] = useState(initialDog);
  const [imagen, setImagen] = useState(initialDog);

  useEffect(() =>{
    updateDog();
  }, []);

  const updateDog = () => {
    getDogs()
      .then((newDog) => {
        setDog(newDog);
      })
  }

  useEffect(() =>{
    updateImages();
  }, []);

  const updateImages = () => {
    getImage()
      .then((newImages) => {
        setImagen(newImages);
      })
  }

  return (
    <div className="app">
      <Select/>
      <Tarjeta dog={dog} imagen={imagen}/>
    </div>
  );
}

export default App;
