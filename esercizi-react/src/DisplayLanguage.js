import React from 'react';
import {LanguageContext} from './LanguageContext'


const StringsLanguage = {
    en: {
        CURRENT_LANGUAGE: 'Current Language is: '
    },
    it: {
        CURRENT_LANGUAGE: 'Lingua Attuale è: '
    }
}

export class DisplayLanguage extends React.Component {
    render() { 
        return (
            <div>
                <LanguageContext.Consumer>
                    {(Language) =>{
                        return <h1>{StringsLanguage[Language].CURRENT_LANGUAGE}</h1>
                    }}
                </LanguageContext.Consumer>
            </div>
        );
    }
}