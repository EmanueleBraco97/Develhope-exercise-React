import { useState } from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

export function App() {
  const [language, setLanguage] = useState('en')

  function handleLanguageChange(event) {
    setLanguage(event.target.value)
  }

    return (
      <div> 
        <select value={language} onChange={handleLanguageChange}>
          <option value='en'>ENGLISH</option>
          <option value='it'>ITALIANO</option>
        </select>

        <LanguageContext.Provider value={language}>
          <DisplayLanguage></DisplayLanguage>
        </LanguageContext.Provider>   
      </div>  
    );
  }

