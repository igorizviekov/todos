import React from "react";
import ToDo from "./components/todoList";
import AddNew from "./components/newTodo";
import { useState } from "react";
import { Data } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Data[]>([]);

  const newTodoHandler = (text: string) => {
    setTodos(prevState => {
      return [...prevState, { id: Math.random(), text: text }];
    });
  };

  const deleteHandler = (id: number) => {
    const filteredData = todos.filter(items => items.id !== id);
    setTodos(filteredData);
  };

  return (
    <div className="App">
      <AddNew onAdd={newTodoHandler} />
      <ToDo items={todos} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
