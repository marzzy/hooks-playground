import React , { useState } from 'react';

export default function Counter (){
  const [counter, setCouner] = useState(0);

  return (
    <React.Fragment>
      <p>this is count {counter}</p>
      <button onClick={() => setCouner(counter + 1)}>
        +1
      </button>
    </React.Fragment>
  );
}
