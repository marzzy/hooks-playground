import React from 'react';
import Others from './Others';
import { LangContext, languagesObject } from './langContext';

export default function MainBiggerComponent() {
  return (
    <LangContext.Provider value={languagesObject.fa}>
      <Others />
    </LangContext.Provider>
  );
}
