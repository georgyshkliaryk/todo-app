import React, { Component } from "react";

import "./ToDoCard.css";

export class ToDoCard extends Component<any, {}> {
  state = {
    index: 0
  }
  constructor(props: any) {
    
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      index: this.props.index 
    }
  }
  async handleClick() {
    //this.props.text.splice(this.props.index, 1);
    await this.props.updateData(this.state.index);
    
  }

  render() {
    return (
      <div className="col  s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <p>{this.props.text}</p>
            </div>
            <div className="card-action"> 
              <a onClick={this.handleClick}>Completed</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
