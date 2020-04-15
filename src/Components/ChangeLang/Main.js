import React, { useState } from 'react';
import Others from './Others';
import { LangContext, languagesObject } from './langContext';

export default function MainBiggerComponent() {
  const [lang, setLang] = useState('fa');

  function toggleLang() {
    setLang(lang === 'en' ? 'fa' : 'en');
  }

  return (
    <LangContext.Provider value={languagesObject[lang]}>
      <Others />
      <button type="submit" onClick={toggleLang}>
        active lang :
        {lang}
      </button>
    </LangContext.Provider>
  );
}
