import React from 'react';

const languagesObject = {
  en: ['hi', 'hny', 'how R U?'],
  fa: ['سلام', 'عزیزم', 'چطوری؟'],
};

const LangContext = React.createContext({
  lang: languagesObject.fa,
  toggleLang: () => { },
});

export {
  LangContext,
  languagesObject,
};
