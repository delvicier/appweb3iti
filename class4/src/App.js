import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'Crecer', completed: false },
  { text: 'Bañarse', completed: false },
  { text: 'Comer', completed: false }
]

function App() {
  return (
    <>

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;
