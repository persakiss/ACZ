import React from 'react';


const green = '#39D1B4';
const yellow = '#FFD712';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    {/*in React, whenever you define an event handler that uses this, you need to add this.methodName = this.methodName.bind(this) to your constructor function.*/}
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
     this.setState({ color: newColor })
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}