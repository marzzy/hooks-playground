import React from 'react';

const languagesObject = {
  en: ['hi', 'hny', 'how R U?'],
  fa: ['سلام', 'عزیزم', 'چطوری؟'],
};

const LangContext = React.createContext(languagesObject.fa);

export {
  LangContext,
  languagesObject,
};
