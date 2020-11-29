import React, { Component } from "react";
import { Cards } from "../Cards/Cards";

import "./Main.css";
import { DoneCards } from "../Cards/DoneCards";

export class Main extends Component<any, {}> {
  state = {
    tasks: [],
    doneTasks: [],
    inputValue: "",
    index: 0,
  };

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.AddTask = this.AddTask.bind(this);
    this.updateData = this.updateData.bind(this);
    this.updateData2 = this.updateData2.bind(this);
    this.updateData3 = this.updateData3.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      doneTasks: JSON.parse(localStorage.getItem("doneTasks") || "[]"),
      inputValue: "",
      index: 0,
    };
  }

  async updateData(value: number) {
    await this.setState({ index: value });
    this.setState({
      doneTasks: [...this.state.doneTasks, this.state.tasks[this.state.index]],
    });
    this.state.tasks.splice(this.state.index, 1);
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("doneTasks", JSON.stringify(this.state.doneTasks));
    this.forceUpdate();
  }

  async updateData2(value: number) {
    await this.setState({ index: value });
    this.state.tasks.splice(this.state.index, 1);
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    this.forceUpdate();
  }

  async updateData3(value: number) {
    await this.setState({ index: value });
    this.state.doneTasks.splice(this.state.index, 1);
    localStorage.setItem("doneTasks", JSON.stringify(this.state.doneTasks));
    this.forceUpdate();
  }

  handleChange(e: any) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  async AddTask() {
    if (this.state.inputValue !== "") {
      await this.setState({
        tasks: [...this.state.tasks, this.state.inputValue],
      });
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }

    this.setState({
      inputValue: "",
    });
  }
  async handleKeyDown(e: any) {
    if (e.key === "Enter") {
      if (this.state.inputValue !== "") {
        await this.setState({
          tasks: [...this.state.tasks, this.state.inputValue],
        });
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }

      this.setState({
        inputValue: "",
      });
    }
  }

  render() {
    return (
      <div className="main">
        <div className="main__tasks">
          <div className="main__todo">
            Tasks to do:
            <Cards
              text={this.state.tasks}
              updateData={this.updateData}
              updateData2={this.updateData2}
              btn={"mark as completed"}
              btn2={"remove task"}
            />
            <form>
              <div className="input-field col s6">
                <input
                  placeholder="Task to do"
                  id="addTask"
                  type="text"
                  className="validate"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                />{" "}
                <br />
                <input
                  type="button"
                  value={"Add new task"}
                  className="waves-effect waves-light btn #b39ddb deep-purple lighten-3"
                  onClick={this.AddTask}
                  
                />
              </div>
            </form>
          </div>
          <div className="main__finished">
            Completed tasks:
            <DoneCards
              text={this.state.doneTasks}
              btn={"done"}
              updateData3={this.updateData3}
            />
          </div>
        </div>
      </div>
    );
  }
}
