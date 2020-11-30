import React from "react";
import "./Header.css";

class Nav extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #b39ddb deep-purple lighten-3">
            <div className="container">
              <a href="/" className="brand-logo center">
                ToDoApp
              </a> 
            </div>
            <div></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
