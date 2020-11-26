import React, { Component } from "react";
import { ToDoCard } from "../ToDoCard/ToDoCard";

export class Cards extends Component<any, {}> {
  state = {
    text: ["Go to gym", "Do shopping", "Smile"],
  };
  constructor(props: any) {
    super(props);
    this.state = {
      text: [this.props.newTask]
    }
    //if (this.props.newTask != undefined) {
     
   // }
  }
  componentWillReceiveProps() {
    if (this.props.newTask !== undefined) {
    var data = this.state.text.concat(this.props.newTask);
    this.setState({
      text: data 
    })
  } 
  }
  // componentWillReceiveProps() {
  //   var newTask = this.state.text.concat(this.props.newTask);
  //   this.setState({ text: newTask });
  //   //   console.log(this.state.text);
  // }

  componentDidMount() {
  //  console.log(this.props.newTask);
  }
  componentDidUpdate() {
    console.log(this.state.text);
    console.log(this.props.newTask);
    
    
  }


  render() {
    let cards = [];
    if (this.state.text === undefined) {
      cards = [];
    } else {
    for (let i = 0; i < this.state.text.length; i++) {
      cards.push(<ToDoCard key={i} text={this.state.text[i]} />);
    }
  }

    return cards; 
  }
}
