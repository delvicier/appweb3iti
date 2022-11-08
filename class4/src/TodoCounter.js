import React from "react";
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
};

function TodoCounter(){
    return(
        <h1 className="TodoCounter" >Has completado 2 de 3 TODOs</h1>
    );
}

export {TodoCounter}



