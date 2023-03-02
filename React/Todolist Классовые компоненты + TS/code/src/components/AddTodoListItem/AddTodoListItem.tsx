import { Component,ChangeEvent } from "react";


interface IAddTodoListItemProps {
    onAdd: (text: string) => void,
}

interface IAddTodoListItemState {
    text: string
}

export default class AddTodoListItem extends Component<IAddTodoListItemProps, IAddTodoListItemState> {
    state = {
        text: ""
    };

  onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({text: event.target.value})
  }
    
  onSubmit = () => {
    this.props.onAdd(this.state.text)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} name="text" onChange={this.onValueChange}/>
        <button disabled={this.state.text.length === 0} onClick={this.onSubmit}>Add</button>
      </div>
    );
  }
}
