import React from 'react'

const Tarjeta = ({ dog }) => {
  return (
    <div className='card'>
        <img src={dog.image}alt="dog" />
        <p>{dog.name}</p>
    </div>
  )
}

export {Tarjeta}