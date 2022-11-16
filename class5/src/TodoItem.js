import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
      <div className="Conten"> 
      <li className="TodoItem">
        <span className={`icono hecho ${props.completed && 'hecho--active'}`} onClick={props.onComplete}>
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="icono eliminar" onClick={props.onDelete}>
          X
        </span>
      </li>
      </div>
    );
  }
  

export {TodoItem}
