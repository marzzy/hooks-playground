import React, { useState } from 'react';
import Others from './Others02';
import { LangContext } from './langContext';

export default function MainBiggerComponent() {
  const [lang, setLang] = useState('fa');

  function toggleHandler() {
    setLang(lang === 'en' ? 'fa' : 'en');
  }

  return (
    <LangContext.Provider value={{ lang, toggleHandler }}>
      <LangTogglerIndependent />
      <Others />
    </LangContext.Provider>
  );
}

function LangTogglerIndependent() {
  return (
    <LangContext.Consumer>
      {({ lang, toggleHandler }) => (
        <button type="submit" onClick={toggleHandler}>
          active lang :
          {lang}
        </button>
      )}
    </LangContext.Consumer>
  );
}
