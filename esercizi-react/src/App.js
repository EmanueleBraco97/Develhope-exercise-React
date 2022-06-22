import {Routes, Route} from 'react-router-dom';
import { ClickCounter } from './ClickCounter';
import {Welcome} from './Welcome'
import { ShowGithubUser } from './ShowGithubUser';

export function App(){
    return( 
            <Routes>
                <Route path='/' element={<Welcome name='emanuele'></Welcome>}></Route>
                <Route path='/ClickCounter' element={<ClickCounter></ClickCounter>}></Route>
                <Route path='/:username' element={<ShowGithubUser></ShowGithubUser>}></Route>
            </Routes>     
    )
}
