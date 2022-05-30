import React from 'react';

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {this.props.name}</p>
                <p>La tua eta è : {this.props.age}</p>
            </div>
        )
    }
}