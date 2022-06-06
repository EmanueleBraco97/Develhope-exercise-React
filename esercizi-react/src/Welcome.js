import React from 'react';

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
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