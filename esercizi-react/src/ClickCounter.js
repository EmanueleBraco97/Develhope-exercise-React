import {useState} from 'react'

export function ClickCounter({count = 0}){
    const [counter, setCounter] = useState(count)

    function counterIncrement(){
        setCounter(c => c+1)
    }
    
    return(
        <div>
            <h3>Count: {counter}</h3>
            <button onClick={counterIncrement}>Increment</button>
        </div>
    )
}











// import React from 'react';
// export class ClickCounter extends React.Component {
//     state = { 
//         count: 0
//      } 
//      counterIncrement = () => {
//          this.setState((state) => {
//             return {
//                 count: state.count + 1
//             }
//          })
//      }
//     render() { 
//         return (
//             <div>
//                 <h3>Count: {this.state.count}</h3>
//                 <button onClick = {this.counterIncrement}>Increment</button>
//             </div>        
//         );
//     }
// }
 
