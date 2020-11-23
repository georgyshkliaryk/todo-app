import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper #b39ddb deep-purple lighten-3">
          <div className="container">
            <a href="#!" className="brand-logo center">
              ToDoApp
            </a>
            <ul className="left hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li className="active">
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
