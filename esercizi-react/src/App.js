import React from 'react';
import { UseCounter } from './UseCounter';
import {Counter} from './Counter'

  export function App() {
    const {counter} = UseCounter
    return (
      <div>
        <Counter>{counter}</Counter>
      </div>
    );
  }
