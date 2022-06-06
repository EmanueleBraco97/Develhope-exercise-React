import React from 'react';
// import {Welcome} from './Welcome';
// import { InteractiveWelcome } from './InteractiveWelcome';
import {Login} from './Login';

export class App extends React.Component {
    

    onLogin = (state) => {
        console.log(state)
    }

    render() { 
        return (
            <div>
                {/* <Welcome></Welcome>
                <InteractiveWelcome></InteractiveWelcome> */}
                <Login></Login>
            </div>
        );
    }
}
 
