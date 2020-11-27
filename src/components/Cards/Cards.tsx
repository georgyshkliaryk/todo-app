import React from "react";
import { ToDoCard } from "../ToDoCard/ToDoCard";

export class Cards extends React.Component<any, {}> {
    state = {
        index: 0
    }
  constructor(props: any) {
    super(props);
    
  }


  render() { 
    let cards = []; 
    if (this.props.text === undefined) {
      cards = [];
    } else {      
      for (let i = 0; i < this.props.text.length; i++) { 
        cards.push(<ToDoCard key={i} text={this.props.text[i]} index={i} updateData={this.props.updateData}/>);
      }
    }

    return cards;
  }
}
