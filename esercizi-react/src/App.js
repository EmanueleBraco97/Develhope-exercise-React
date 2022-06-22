import {Routes, Route} from 'react-router-dom';
import { ClickCounter } from './ClickCounter';
import {Welcome} from './Welcome'

export function App(){
    return( 
            <Routes>
                <Route path='/' element={<Welcome name='emanuele'></Welcome>}></Route>
                <Route path='/ClickCounter' element={<ClickCounter></ClickCounter>}></Route>
            </Routes>     
    )
}
