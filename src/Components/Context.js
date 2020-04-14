/* eslint-disable react/prop-types */
import React from 'react';

const ContextValue = React.createContext('this is a sample');
export default function MainBiggerCom() {
  return (
    <ContextValue.Provider value="this is a new value">
      <FirstLevelChild />
    </ContextValue.Provider>
  );
}

function FirstLevelChild() {
  return (<SecoundLevelChild />);
}

class SecoundLevelChild extends React.Component{
  static contextType = ContextValue;
  render() {
    return (
      <>
        <h1>Finally this is the value</h1>
        <p>{this.context}</p>
      </>
    );
  }
}
