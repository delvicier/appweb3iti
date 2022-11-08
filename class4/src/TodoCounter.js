import React from "react";
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
};

function TodoCounter(){
    return(
        <section className="TodoCounter">
            <p className="Nombre"><b>
            Hola, Chris Delvicier</b></p>
            <h1 className="Titulo" >Has completado 2 de 3 TODOs</h1>
        </section>
    );
}

export {TodoCounter}



