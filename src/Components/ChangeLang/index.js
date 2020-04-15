import React from 'react';
import MainBiggerComponent from './Main';
import MainBiggerComponent02 from './Main02';

export default function ChangeLang() {
  return (
    <>
      <h1>lang example</h1>
      <h2>way 01 :</h2>
      <MainBiggerComponent />
      <br />
      <h2>way 02 :</h2>
      <MainBiggerComponent02 />
      <br />
    </>
  );
}
