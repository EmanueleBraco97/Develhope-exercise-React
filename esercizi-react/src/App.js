import React from 'react';
import {Welcome} from './Welcome';
import { InteractiveWelcome } from './InteractiveWelcome';

export class App extends React.Component {
    render() { 
        return (
            <div>
                <Welcome></Welcome>
                <InteractiveWelcome></InteractiveWelcome>
            </div>
        );
    }
}
 
