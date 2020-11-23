import React, { Component } from 'react';
import { ToDoCard } from '../ToDoCard/ToDoCard';

export class Cards extends Component<any, {}> {
    render() {
        return(
            <div>
                <ToDoCard text="Go to gym"/>
            </div>
        )
    }
}
