import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"
import React, { useState, useEffect} from 'react';
function App() {
  

  const[todos, setTodos] = useState([ 
  ]);
  const [todoValue, setTodoValue] = useState("o(-`д´- ｡)");
  

  function persistData(newList){
    localStorage.setItem("todos", JSON.stringify({todos: newList}));
  }
  function handleTodos(newTodo){
    
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodoList); 
    setTodos(newTodoList);
  }

  function handleEditTodo(index, newValue){
    const valueToBeEdited = todos[index];
    
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if(!localStorage){
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if(localTodos){
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    }
  }, []);

  return (
    <>
      <TodoInput handleTodos={handleTodos} todoValue ={todoValue} setTodoValue = {setTodoValue}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo = {handleEditTodo}/>
    </>
  )
}

export default App
