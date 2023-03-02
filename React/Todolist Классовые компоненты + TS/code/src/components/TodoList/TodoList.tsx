import { FC } from "react";
import { ITodo } from "../../types";
import TodoListItem from "../TodoListItem/TodoListItem";

interface ITodoListProps {
  todos: ITodo[];
  onDone: (id: number, doneOr: boolean ) => void; //тип () => Void указывает на функцию что ничего не вернет
  onImportant: (id: number, doneOr: boolean) => void
  onDelete: (id: number) => void
}

const TodoList: FC<ITodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <TodoListItem key={item.id} {...item} onDeleteClick={() => props.onDelete(item.id)} onDoneClick={() => props.onDone(item.id, true)} onImportantClick={() => props.onImportant(item.id, false)}/>
      ))}
    </ul>
  );
};

export default TodoList;
