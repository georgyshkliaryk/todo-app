import React, { Component } from "react";
import { Cards } from "../Cards/Cards";

import "./Main.css";
import { DoneCards } from "../Cards/DoneCards";

interface IMainState {
  tasks: string[];
  doneTasks: string[];
  inputValue: string;
  index: number;
  checked: boolean;
  themeMain: React.CSSProperties;
  themeTitle: React.CSSProperties;
  themeCard: React.CSSProperties;
  themeInput: React.CSSProperties;
}

export class Main extends Component<any, {}> {
  state: IMainState = {
    tasks: [],
    doneTasks: [],
    inputValue: "",
    index: 0,
    checked: false,
    themeMain: {
      backgroundColor: "black",
    } as React.CSSProperties,
    themeTitle: {
      color: "black",
    } as React.CSSProperties,
    themeCard: {
      backgroundColor: "white",
    } as React.CSSProperties,
    themeInput: {
      color: "black",
    } as React.CSSProperties,
  };

  constructor(props: any) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.markAsCompleted = this.markAsCompleted.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.deleteDone = this.deleteDone.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);

    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      doneTasks: JSON.parse(localStorage.getItem("doneTasks") || "[]"),
      inputValue: "",
      index: 0,
      checked: JSON.parse(localStorage.getItem("checked") || "false"),
      themeMain: {
        backgroundColor: "white",
      } as React.CSSProperties,
      themeTitle: {
        color: "black",
      } as React.CSSProperties,
      themeCard: {
        backgroundColor: "white",
      } as React.CSSProperties,
      themeInput: {
        color: "black",
      } as React.CSSProperties,
    };
  }

  async componentDidMount() {
    if (this.state.checked) {
      this.setState({
        checked: JSON.parse(localStorage.getItem("checked") || "false"),
        themeMain: {
          backgroundColor: "#121212",
        },
        themeTitle: {
          color: "white",
        },
        themeCard: {
          backgroundColor: "#242424",
        },
        themeInput: {
          color: "white",
        },
      });
    }
  }

  async markAsCompleted(value: number) {
    await this.setState({ index: value });
    this.setState({
      doneTasks: [...this.state.doneTasks, this.state.tasks[this.state.index]],
    });
    this.state.tasks.splice(this.state.index, 1);
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("doneTasks", JSON.stringify(this.state.doneTasks));
    this.forceUpdate();
  }

  async deleteToDo(value: number) {
    await this.setState({ index: value });
    this.state.tasks.splice(this.state.index, 1);
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    this.forceUpdate();
  }

  async deleteDone(value: number) {
    await this.setState({ index: value });
    this.state.doneTasks.splice(this.state.index, 1);
    localStorage.setItem("doneTasks", JSON.stringify(this.state.doneTasks));
    this.forceUpdate();
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  async handleAddTask() {
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

  async handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
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

  async handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      await this.setState({
        checked: true,
        themeMain: {
          backgroundColor: "#121212",
        },
        themeTitle: {
          color: "white",
        },
        themeCard: {
          backgroundColor: "#242424",
        },
        themeInput: {
          color: "white",
        },
      });
    } else {
      await this.setState({
        checked: false,
        themeMain: {
          backgroundColor: "white",
        },
        themeTitle: {
          color: "black",
        },
        themeCard: {
          backgroundColor: "white",
        },
        themeInput: {
          color: "black",
        },
      });
    }
    localStorage.setItem("checked", JSON.stringify(this.state.checked));
  }

  render() {
    return (
      <div className="main" style={this.state.themeMain}>
        <div className="switch red1">
          <label>
            Light
            <input
              type="checkbox"
              onChange={this.handleThemeChange}
              checked={this.state.checked}
            />
            <span className="lever"></span>
            Dark
          </label>
        </div>
        <div className="main__tasks">
          <div className="main__todo" style={this.state.themeTitle}>
            Tasks to do:
            <Cards
              text={this.state.tasks}
              markAsCompleted={this.markAsCompleted}
              deleteToDo={this.deleteToDo}
              btn={"mark as completed"}
              btn2={"remove task"}
              styleCard={this.state.themeCard}
            />
            <form>
              <div className="input-field col s6">
                <input
                  placeholder="Task to do"
                  id="addTask"
                  type="text"
                  className="validate"
                  style={this.state.themeInput}
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown}
                />{" "}
                <br />
                <input
                  type="button"
                  value={"Add new task"}
                  className="waves-effect waves-light btn #b39ddb deep-purple lighten-3"
                  onClick={this.handleAddTask}
                />
              </div>
            </form>
          </div>
          <div className="main__finished" style={this.state.themeTitle}>
            Completed tasks:
            <DoneCards
              text={this.state.doneTasks}
              btn={"done"}
              deleteDone={this.deleteDone}
              styleCard={this.state.themeCard}
            />
          </div>
        </div>
      </div>
    );
  }
}
