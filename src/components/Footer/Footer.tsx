import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer #b39ddb deep-purple lighten-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">ToDoApp</h5>
              <p className="grey-text text-lighten-4">ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks and also you can set Reminder with specific tasks</p>
            </div>
            <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://github.com/georgyshkliaryk/todoapp" target="_blank" rel="noreferrer">Github</a></li>
                <li><a className="grey-text text-lighten-3" href="https://console.firebase.google.com/u/0/project/todoapp-b1de3/overview" target="_blank" rel="noreferrer">Firebase</a></li>
              </ul>
              <h5 className="white-text">App built with</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a></li>
                <li><a className="grey-text text-lighten-3" href="https://materializecss.com/" target="_blank" rel="noreferrer">Materialize.css</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 todoapp
          </div>
        </div>
      </footer>
    )
}

export default Footer;
