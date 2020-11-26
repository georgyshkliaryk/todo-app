import React, { Component } from "react";

import "./ToDoCard.css";

interface IProps {
    text: string;
}

export class ToDoCard extends Component<any, {}> {
    constructor(props: IProps) {
        super(props);
    }
  render() {
    return (
        <div className="col  s12 m7">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  {this.props.text}
                </p> 
              </div>
              <div className="card-action">
                <a>Completed</a> 
              </div>
            </div>
          </div>
        </div>
    );
  }
}
