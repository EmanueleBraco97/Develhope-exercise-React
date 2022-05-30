import React from 'react';

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p><strong>Welcome, {this.props.name}</strong></p>
                <p>La tua eta è : {this.props.age}</p>
            </div>
        )
    }
}