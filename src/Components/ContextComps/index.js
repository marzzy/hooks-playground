import React from 'react';
import Context01 from './Context01';
import Context02 from './Context02';

export default function Context() {
  return (
    <>
      <h1>Context examples</h1>
      <h2>class comp way : </h2>
      <Context01 />
      <br />
      <h2>func comp way(hook) : </h2>
      <Context02 />
    </>
  );
}
