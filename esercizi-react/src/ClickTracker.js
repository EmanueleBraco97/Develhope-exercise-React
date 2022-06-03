import React from 'react';

export class ClickTracker extends React.Component {  

    state = {
        buttonPressed: ''
    }

    lastButtonPressed = (e) => {
        console.log(e.target.outerHTML)
        this.setState(state => {
           return {
               buttonPressed : `<h1>il bottone premuto è : ${e.target.outerHTML}</h1>` //outerHTML = stampa l'HTML sottoforma di STRINGA//
           }
        })
    }

     
    render() { 
        return (
          <div>
              <button id='button1' onClick={this.lastButtonPressed}>Bottone 1</button>
              <button id='button2' onClick={this.lastButtonPressed}>Bottone 2</button>
              <button id='button3' onClick={this.lastButtonPressed}>Bottone 3</button>

              <div dangerouslySetInnerHTML={{__html:this.state.buttonPressed}}></div>
              {/* in questa riga di codice sopra, sto 'trasformando' la stringa avuta nella funzione, in codice HTML */}
              
            
          </div>
        );
    }
}
