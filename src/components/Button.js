import React from 'react';
import { Talker } from './Talker';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        Click me!
      </button>
    );
  }
}