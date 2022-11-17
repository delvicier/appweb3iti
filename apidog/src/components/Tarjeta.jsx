import React from 'react'

const Tarjeta = ({ dog, imagen }) => {
  return (
    <div className='card'>
        <img src={imagen.images}alt="dog" />
        <p>{dog.names}</p>
        <p>id: {imagen.ids}</p>
    </div>
  )
}

export {Tarjeta}