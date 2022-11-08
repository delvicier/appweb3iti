import React, { Children } from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList">
            <ul className="lista">
            {props.children}
            </ul>
        </section>
    );
}

export {TodoList}
