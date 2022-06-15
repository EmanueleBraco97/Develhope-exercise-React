import React from 'react';
import {ClickCounter} from './ClickCounter'

export class App extends React.Component {
  render() { 
    return (
      <ClickCounter count={0} onCounterChange={(e) => console.log(`onCounterChange - ${e}`)}></ClickCounter>
    );
  }
}
