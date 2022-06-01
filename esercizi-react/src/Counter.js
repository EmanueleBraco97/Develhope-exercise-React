import React from 'react';
import {CounterDisplay} from './CounterDisplay'

export class Counter extends React.Component {
    state = { 
        count: this.props.initialValue,
     } 

     componentDidMount(){
        this._interval =  setInterval(() => {
            this.setState((state) => {
                return{
                    count: state.count + this.props.increment,
                }
            })
        }, this.props.interval);
        if(this._interval){
            clearInterval(this._interval)
        }
    }

    //Come possiamo vedere dalle varie prove fatte, non abbiamo più bisogno del 'constructor'//


    render() { 
        return (
            <div>
                <h1><CounterDisplay count = {this.state.count}></CounterDisplay></h1>
            </div>
            
        );
    }
}