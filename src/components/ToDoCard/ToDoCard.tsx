import React, { Component } from "react";

import "./ToDoCard.css";

export class ToDoCard extends Component<any, {}> {
  state = {
    index: 0,
  };
  constructor(props: any) {
    super(props);
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this); 
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);

    this.state = {
      index: this.props.index,
    };
  }
  async handleClickBtn1() {
    await this.props.updateData(this.state.index);
  }
  async handleClickBtn2() {
    await this.props.updateData2(this.state.index);
  }
  async handleClickBtn3() {
    await this.props.updateData3(this.state.index);
  }

  render() {
    if (this.props.btn === "mark as completed") {
      return (
        <div className="col  s12 m7">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>{this.props.text}</p>
              </div>
              <div className="card-action">
                <a
                  className="blue-text text-darken-2"
                  onClick={this.handleClickBtn1}
                >
                  {this.props.btn}
                </a>
                <a className="brn__delete" onClick={this.handleClickBtn2}>
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
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>{this.props.text}</p>
              </div>
              <div className="card-action">
                <a
                  className="green-text text-lighten-2"
                  onClick={this.handleClickBtn3}
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
