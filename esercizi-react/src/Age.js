import React from 'react';

export class Age extends React.Component{
    render(){
        return(
            <div>
                <p>La tua eta è : {this.props.age}</p>
            </div>
        )
    }
}