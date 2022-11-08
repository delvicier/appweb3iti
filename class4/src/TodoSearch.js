import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    return(
        <section className="TodoSearch">
            <input placeholder="Agregar nueva tarea" className="buscar"/>
        </section>
    );
}

export {TodoSearch}
