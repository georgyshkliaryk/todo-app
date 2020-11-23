import React, { Component } from "react";

import "./Main.css";

export class Main extends Component<any, {}> {
  render() {
    return (
      <div className="main">
        <div className="main__todo">
          Tasks todo:
          <div className="main__todo__cards">
            <div className="col  s12 m7">
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a>Completed</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__finished">Tasks done:</div>
      </div>
    );
  }
}
