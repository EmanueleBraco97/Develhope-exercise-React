import React from 'react';
import {Counter} from './Counter'

export class App extends React.Component {
  render() { 
    return (
      <Counter initialValue= {10} increment = {20} interval = {4000}></Counter>
    );
  }
}
 
