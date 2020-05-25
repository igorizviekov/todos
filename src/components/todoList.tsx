import React from "react";
import { Data } from "../todo.model";

interface ToDoProp {
  items: Data[];
  onDelete: (id: number) => void;
}

const todoList: React.FC<ToDoProp> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          {item.text}{" "}
          <button onClick={props.onDelete.bind(null, item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default todoList;
