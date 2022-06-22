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