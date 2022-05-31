import React from 'react';
import { Age } from './Age';

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome,{this.props.name}</p>
                {(this.props.age > 18 && this.props.age < 65 && this.props.name === 'John') && <Age age= {this.props.age}></Age>}
            </div>
        );
    }
}







//N.B. PROPS-02:
//-Se non viene passato alcun nome prop al componente...non succede nulla, non da nessun errore.

//-possiamo impostare un valore di 'Default':

// Welcome.defaultProps = {
//     name : 'Emanuele'
// };

//In questo caso, se non verrà passato alcun nome prop, in valore predefinato sarà sempre 'Emanuele'