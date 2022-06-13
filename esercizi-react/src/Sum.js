import React from 'react';

export function Sum({numbers= [7,14,15,24,10]}) {
    let sum = 0;
    numbers.forEach(element => {
        sum+=element
    });
    return ( 
        <div>
            <h1>la somma è: {sum}</h1>
        </div>
     );
}


// Function Components 03 = -IN QUESTO MODO ASSEGNIAMO DEI VALORI PREDEFINITI