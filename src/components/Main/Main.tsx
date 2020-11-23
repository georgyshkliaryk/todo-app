import React, { Component } from "react";
import { Cards } from "../Cards/Cards";

import "./Main.css";

export class Main extends Component<any, {}> {
  render() {
    return (
      <div className="main">
        <div className="main__todo">
          Tasks todo:
            <Cards />
        </div>
        <div className="main__finished">Tasks done:</div>
      </div>
    );
  } 
}
