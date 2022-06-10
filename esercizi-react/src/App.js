import React from 'react';
import {Welcome} from './Welcome';
// import { InteractiveWelcome } from './InteractiveWelcome';
// import {Login} from './Login';
// import { UncontrolLogin } from './UncontrolLogin';

export class App extends React.Component {
    

    onLogin = (state) => {
        console.log(state)
    }

    render() { 
        return (
            <div>
                <Welcome name ='emanuele'></Welcome>
                {/* <InteractiveWelcome></InteractiveWelcome> 
                <Login></Login>
                <UncontrolLogin></UncontrolLogin> */}
            </div>
        );
    }
}
 
