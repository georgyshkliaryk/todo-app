import React, { Component } from "react";

import "./ToDoCard.css";
import IIndexState from "../Cards/Cards";


export class ToDoCard extends Component<any, {}> {
  state: IIndexState = {
    index: 0,
  };
  constructor(props: any) {
    super(props);
    this.handleClickMarkAsCompleted = this.handleClickMarkAsCompleted.bind(this);
    this.handleClickBtnDeleteToDo = this.handleClickBtnDeleteToDo.bind(this); 
    this.handleClickDeleteDone = this.handleClickDeleteDone.bind(this);

    this.state = {
      index: this.props.index,
    };
  }
  async handleClickMarkAsCompleted() {
    await this.props.markAsCompleted(this.state.index);
  }
  async handleClickBtnDeleteToDo() {
    await this.props.deleteToDo(this.state.index);
  }
  async handleClickDeleteDone() {
    await this.props.deleteDone(this.state.index);
  }

  render() {
    if (this.props.btn === "mark as completed") {
      return (
        <div className="col  s12 m7">
          <div className="card horizontal" style={this.props.styleCard}>
            <div className="card-stacked">
              <div className="card-content">
                <p>{this.props.text}</p>
              </div>
              <div className="card-action">
                <a
                  className="blue-text text-darken-2"
                  onClick={this.handleClickMarkAsCompleted}
                >
                  {this.props.btn}
                </a>
                <a className="btn__delete" onClick={this.handleClickBtnDeleteToDo}>
                  {this.props.btn2}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col  s12 m7">
          <div className="card horizontal" style={this.props.styleCard}> 
            <div className="card-stacked">
              <div className="card-content">
                <p>{this.props.text}</p>
              </div>
              <div className="card-action">
                <a
                  className="green-text text-lighten-2"
                  onClick={this.handleClickDeleteDone}
                >
                  {this.props.btn}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
