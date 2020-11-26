import React, { Component } from "react";
import { Cards } from "../Cards/Cards";

import "./Main.css";

export class Main extends Component<any, {}> {
  state = {
    task: "",
    taskToSend: "",
    isPropsEmpty: true,
  };
  constructor(props: any) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleAddTask(e: any) {
    e.preventDefault();
    await this.setState({
      taskToSend: this.state.task,
      isPropsEmpty: false,
    });
  }

  handleChange(e: any) {
    const value = e.target.value;
    this.setState({
      task: value,
    });
  }

  render() {
    if (this.state.taskToSend === "") {
      return (
        <div className="main">
          <div className="main__tasks">
            <div className="main__todo">
              Tasks to do:
              <Cards/>
              <form onSubmit={this.handleAddTask}>
                <div className="input-field col s6">
                  <input
                    placeholder="Task to do"
                    id="addTask"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    value={"Add new task"}
                    className="waves-effect waves-light btn #b39ddb deep-purple lighten-3"
                  />
                </div>
              </form>
            </div>
            <div className="main__finished">Completed tasks:</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <div className="main__tasks">
            <div className="main__todo">
              Tasks to do:
              <Cards newTask={this.state.taskToSend}/>
              <form onSubmit={this.handleAddTask}>
                <div className="input-field col s6">
                  <input
                    placeholder="Task to do"
                    id="addTask"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    value={"Add new task"}
                    className="waves-effect waves-light btn #b39ddb deep-purple lighten-3"
                  />
                </div>
              </form>
            </div>
            <div className="main__finished">Completed tasks:</div>
          </div>
        </div>
      );
    }
  }
}
