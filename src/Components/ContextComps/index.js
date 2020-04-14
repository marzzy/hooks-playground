import React from 'react';
import Context01 from './Context01';
import Context02 from './Context02';
import Context03 from './Context03';

export default function Context() {
  return (
    <>
      <h1>Context examples</h1>
      <h2>class comp way : </h2>
      <Context01 />
      <br />
      <h2>func comp way(hook)01 : </h2>
      <Context02 />
      <br />
      <h2>func comp way(hook)02 : </h2>
      <p>it use default value when there is no Provider</p>
      <Context03 />
    </>
  );
}
