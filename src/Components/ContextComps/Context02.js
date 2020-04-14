/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

const ContextValue = React.createContext('this is a sample');
export default function MainBiggerCom() {
  return (
    <ContextValue.Provider value="this is a new one">
      <FirstLevelChild />
    </ContextValue.Provider>
  );
}

function FirstLevelChild() {
  return (<SecoundLevelChild />);
}

function SecoundLevelChild() {
  const getContextVal = useContext(ContextValue);

  return (
    <>
      <h3>Finally this is the value</h3>
      <p>{getContextVal}</p>
    </>
  );
}
