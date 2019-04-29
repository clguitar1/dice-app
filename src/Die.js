import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    const { animateDiceClass, diceClass1, diceClass2 } = this.props;

    return (
      <div className={animateDiceClass}>
        <i className={diceClass1}></i>
        <i className={diceClass2}></i>
      </div>
    )
  }
}

export default Die;