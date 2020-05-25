import React from "react";
import { useState } from "react";
interface Submit {
  onAdd: (text: string) => void;
}
const NewTodo: React.FC<Submit> = props => {
  const [input, setInput] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.onAdd(input);
    setInput("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <label htmlFor="new"></label>
      <input id="new" type="text" value={input} onChange={inputHandler} />
      <button onClick={submitHandler}>ADD</button>
    </div>
  );
};

export default NewTodo;
