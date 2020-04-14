/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

const ContextValue = React.createContext('this is a sample');
export default function MainBiggerCom() {
  return (<FirstLevelChild />);
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
