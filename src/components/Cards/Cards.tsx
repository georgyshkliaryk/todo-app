import React from "react";
import { ToDoCard } from "../ToDoCard/ToDoCard";

export default interface IIndexState {
  index: number
}

export class Cards extends React.Component<any, {}> {
  state: IIndexState = {
    index: 0,
  }; 

  render() {
    let cards = [];
    if (this.props.text === undefined) {
      cards = [];
    } else {
      for (let i = 0; i < this.props.text.length; i++) {
        cards.push(
          <ToDoCard
            key={i}
            text={this.props.text[i]}
            index={i}
            markAsCompleted={this.props.markAsCompleted}
            deleteToDo={this.props.deleteToDo}
            deleteDone={this.props.deleteDone}
            btn={this.props.btn}
            btn2={this.props.btn2}
            styleCard={this.props.styleCard}
          />
        );
      }
    }

    return cards;
  }
}
