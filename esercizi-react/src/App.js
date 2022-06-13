import React from 'react';
import {Welcome} from './Welcome';

export class App extends React.Component {
    onLogin = (state) => {
        console.log(state)
    }

    render() { 
        return (
            <div>
                <Welcome name ='emanuele'></Welcome>
            </div>
        );
    }
}
 
