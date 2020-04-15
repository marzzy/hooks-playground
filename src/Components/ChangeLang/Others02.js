import React, { useContext } from 'react';
import { LangContext, languagesObject } from './langContext';

export default function Others() {
  return (
    <FirstInnerComponent />
  );
}

function FirstInnerComponent() {
  return (
    <SecoundInnerComponent />
  );
}

function SecoundInnerComponent() {
  return (
    <ThirdInnerComponent />
  );
}

function ThirdInnerComponent() {
  const { lang } = useContext(LangContext);

  return (
    <p>{languagesObject[lang].join(' ')}</p>
  );
}
