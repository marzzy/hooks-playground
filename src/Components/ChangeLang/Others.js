import React, { useContext } from 'react';
import { LangContext } from './langContext';

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
  const getLang = useContext(LangContext);
  return (
    <p>{getLang.join(' ')}</p>
  );
}
