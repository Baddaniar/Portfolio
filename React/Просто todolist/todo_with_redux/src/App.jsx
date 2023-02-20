import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {addTodo} from "./store/TodoSlice"

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText("")
  }



  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
