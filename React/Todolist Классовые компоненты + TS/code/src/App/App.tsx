import { Component, } from "react";
import { TodoList, Header, SearchInput, AddTodoListItem, FilterButtons } from "../components";
import { ITodo } from "../types";

interface IAppState {
  todos: ITodo[];
  searchText: string;
  filterState: string
}

export default class App extends Component<{}, IAppState> {
  state = {
    //Квадратные скобки указывают что типы внутри массива. можно так же сдедать Array<ITodo>
    todos: [
      { id: 1, text: "Learn react", done: true, important: true },
      { id: 2, text: "Blablabla", done: true, important: false },
      { id: 3, text: "Third things", done: false, important: true },
    ],
    searchText: "",
    filterState: "all" 
  };

  onSearch = (value: string) => {
    this.setState({ searchText: value });
  };

  onFilter = (value: string) => {
    this.setState({filterState: value})
  }

  filterList = (filteredTodos: ITodo) => {
    if(this.state.filterState === "all"){
      return true
    }else if(this.state.filterState === "done"){
      return filteredTodos.done === true
    }else if(this.state.filterState === "important"){
      return filteredTodos.important === true
    }
  }

  onChangeStateTodos = (id: number, doneOr?: boolean) => {
    //Знак вопроса после аргумента указывает что аргумент не обязателен.
    //Переделать под того ккак раньше делали.
    this.setState((state) => {
      const todoIdX = state.todos.findIndex((item) => id === item.id);
      let newTodo;
      if (doneOr) {
        newTodo = {
          ...state.todos[todoIdX],
          done: !state.todos[todoIdX].done,
        };
      } else {
        newTodo = {
          ...state.todos[todoIdX],
          important: !state.todos[todoIdX].important,
        };
      }

      const before = state.todos.slice(0, todoIdX);
      const after = state.todos.slice(todoIdX + 1);
      return {
        todos: [...before, newTodo, ...after],
      };
    });
  };

  onDeleteStateTodos = (id: number) => {
    this.setState((state) => {
      const todoIdX = state.todos.findIndex((item) => id === item.id);
      const before = state.todos.slice(0, todoIdX);
      const after = state.todos.slice(todoIdX + 1);
      return {
        todos: [...before, ...after],
      };
    });
  };

  onAddTodoItem = (text: string) => {
    this.setState((state) => {
      const newTodo: ITodo = {
        id: Math.random(),
        text: text,
        done: false,
        important: true,
      };
      return {
        todos: [...state.todos, newTodo],
      };
    });
  };



  render() {
    const { searchText, todos } = this.state;
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    );

    const doublefiltered = filteredTodos.filter((todo) => this.filterList(todo))

    return (
      <div>
        <Header title="Todo App" />
        <AddTodoListItem onAdd={this.onAddTodoItem} />
        <FilterButtons filterState={this.state.filterState} onFilter={this.onFilter}/>
        <SearchInput search={this.state.searchText} onSearch={this.onSearch} />
        <TodoList
          todos={doublefiltered}
          onDelete={this.onDeleteStateTodos}
          onDone={this.onChangeStateTodos}
          onImportant={this.onChangeStateTodos}
        />
      </div>
    );
  }
}
