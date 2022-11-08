import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        
        <section className="TodoItem">
            <span className="realizada">✓</span>
            <p className="item">{props.text}</p>
            <span className="eliminar">✓</span>
        </section>

    );
}

export {TodoItem}
