import React from 'react';
import { Welcome } from './Welcome';


export class InteractiveWelcome extends React.Component {
    state = { 
        name: ''
     } 

     handleChangeInput = (event) => {
         const value = event.target.value;

         this.setState({
             name : value
         })
     }



    render() { 
        return (
            <div>
                <Welcome name = {this.state.name}></Welcome>
                <input name='name' value={this.state.name} onChange={this.handleChangeInput} ></input>
            </div>
        );
    }
}
 
