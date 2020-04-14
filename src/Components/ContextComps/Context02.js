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
      <h3>Finally this is the value</h3>
      <p>{theVal}</p>
    </>
  );
}
