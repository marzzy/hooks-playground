import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCouner] = useState(0);

  return (
    <>
      <p>
        this is count
        {counter}
      </p>
      <button type="button" onClick={() => setCouner(counter + 1)}>
        +1
      </button>
    </>
  );
}
