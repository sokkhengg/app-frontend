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
  // list and todo
  const [todoName, setTodoName] = useState([])
  const [lists, setLists] = useState([])

  useEffect(()=> {
    //Gets todos and lists
      fetch('http://localhost:9292/todos')
      .then(res => res.json())
      .then(setTodoName)
      fetch('http://localhost:9292/lists')
      .then(res => res.json())
      .then(setLists)
    },[])

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
          />
        </div>
      </div>
    </div>
  );
};

export default App;
