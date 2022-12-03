import './App.css';
import { useState } from 'react';
import TodoItem from "./Components/TodoItem";
import TodoForm from './Components/TodoForm';

function App() {
  
  const initialTodo = [
    { id: 1, title: 'Faire les courses', completed: true, edit: false },
    { id: 2, title: 'Faire la vaisselle', completed: false, edit: false },
    { id: 3, title: 'Manger du chocolat', completed: false, edit: false },
    { id: 4, title: 'Ranger ma chambre', completed: false, edit: false }
  ];

  const [todos, setTodos] = useState(initialTodo);

  function addTodo(newTodoTitle){
    let newTodo = {id: todos[todos.length-1].id + 1 , title: newTodoTitle, completed: false, edit: false};
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function editTodoTitle(id, newTitle){
    setTodos(todos.map(todo => todo.id === id ? {...todo, title: newTitle, edit: false} : todo));
  }

  function toggleEdit(id){
    setTodos(todos.map(todo => todo.id === id ? {...todo, edit: !todo.edit} : todo));
  }



  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todoList'>
        {todos.map((todo) => (
          <TodoItem 
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed} 
            deleteTodo={deleteTodo}
            editing={todo.edit}
            toddgleEdit={toggleEdit}
            editTodoTitle={editTodoTitle}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
