// react hook
import React, { useEffect, useState } from "react";

// styling
import "./App.css";

// component
import Form from "./components/Form";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/todos")
      .then((r) => r.json())
      .then((todos) => setTodos(todos));
  }, []);

    //Creates a todo 
    const postTodo = (todo) => {
      fetch('http://localhost:9292/todos',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(todo)
      })
      .then(res => res.json())
      .then(newTodo => {
        setTodos([newTodo,...todos])
      })
    }

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos}
          postTodo={postTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
