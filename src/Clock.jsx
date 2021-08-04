import React, { Component } from 'react';
import { unmountComponentAtNode } from "react-dom";

export class Clock extends Component {
    constructor(props) {
        console.log("In constructor");
        super(props);
        this.state = {date: new Date(), timeRun: 0};
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidMount() {
    console.log("In componentDidMount");
    this.timeRun++
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }
    
    componentWillUnmount() {
    console.log("In componentWillUnmount");
    clearInterval(this.timerID);
    }

    tick() {
    this.setState({
        date: new Date()
    });
    }

    handleClick() {
    unmountComponentAtNode(document.getElementById('root'));
    }

    static getDerivedStateFromProps(){
        console.log("In getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate(){
        console.log("In shouldComponentUpdate")
        return true; // try with false
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("In getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("In componentDidUpdate")
    }

    render() {
        console.log("In render");
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>Remove</button>           
            </div>
        )
    }
}

export default Clock
