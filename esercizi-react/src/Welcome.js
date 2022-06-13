import React from 'react';


export function Welcome(props){
    return(
        <div className='welcome'>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}








// export class Welcome extends React.Component{
//     render(){
//         return(
//             <div className='welcome'>
//                 <h1>Hello {this.props.name}</h1>
//             </div>
//         );
//     }
// }














//N.B. PROPS-02:
//-Se non viene passato alcun nome prop al componente...non succede nulla, non da nessun errore.

//-possiamo impostare un valore di 'Default':

// Welcome.defaultProps = {
//     name : 'Emanuele'
// };

//In questo caso, se non verrà passato alcun nome prop, in valore predefinato sarà sempre 'Emanuele'