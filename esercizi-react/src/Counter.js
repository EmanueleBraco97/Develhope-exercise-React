import {useEffect, useState} from 'react';
import {CounterDisplay} from './CounterDisplay'

export function Counter({initialValue, increment, interval}){
    const [count, setCount] = useState(initialValue)

    useEffect(() => {
        const newInterval = setInterval(() => {
            setCount((count) => count + increment)
        },interval);
        return () => clearInterval(newInterval)
    }, [count, increment, interval])
    return (
        <div>
           <h1><CounterDisplay count={count}></CounterDisplay></h1> 
        </div>
    )
}
























// export class Counter extends React.Component {
//     state = { 
//         count: this.props.initialValue,
//      } 

//      constructor(props){
//          super(props)

//         setInterval(() => {
//             this.setState((state) => {
//                 return{
//                     count: state.count + this.props.increment,
//                 }
//             })
//         }, this.props.interval);

//      }
//     render() { 
//         return (
//             <div>
//                 <h1><CounterDisplay count = {this.state.count}></CounterDisplay></h1>
//             </div>
            
//         );
//     }
// }