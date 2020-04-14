/* eslint-disable react/prop-types */
import React from 'react';

export default function MainBiggerCom() {
  const sampleVar = 'this is a sample';

  return (<FirstLevelChild val={sampleVar} />);
}

function FirstLevelChild({ val }) {
  return (<SecoundLevelChild theVal={val} />);
}

function SecoundLevelChild({ theVal }) {
  return (
    <>
      <h1>Finally this is the value</h1>
      <p>{theVal}</p>
    </>
  );
}
