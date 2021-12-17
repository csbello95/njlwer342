import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.handleTask = this.handleTask.bind(this);
    this.handleText = this.handleText.bind(this);

    this.state = {
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      task: "",
    };
  }

  handleText(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleTask(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        list: this.state.list.concat(this.state.task),
      });
      this.setState({
        task: "",
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          {this.state.list.map((task, key) => <li key={key}>{task}</li>)}
          </ul>
          <form>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              onKeyPress={this.handleTask}
              onChange={this.handleText}
              value={this.state.task}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
