/* eslint-disable react/no-unescaped-entities */
import React, { useState, useMemo } from 'react';

// usecallback example
// https://dmitripavlutin.com/dont-overuse-react-usecallback/

// usecallback vs. usememo
// https://kentcdodds.com/blog/usememo-and-usecallback

// The main difference between the two is that ‘useCallback’ returns a memoized callback
// and ‘useMemo’ returns a memoized value that is the result of the function parameter.

function useMemoExample() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['hey', 'this', 'is', 'cool'];
  const word = words[wordIndex];

  function computeLetterCount(theWord) {
    let i = 0;
    while (i < 1000000000) i += 1;
    return theWord.length;
  }
  function incrementCount() {
    setCount(count + 1);
  }

  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  return (
    <div style={{ padding: '15px' }}>
      <h2>
        Compute number of letters (slow
        <span role="img">🐌</span>
        )
      </h2>

      <p>
        "
        {word}
        "
        has
        {` ${letterCount} `}
        letters
      </p>

      <button
        type="button"
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <br />
      <br />
      <h2>
        Increment a counter (fast
        <span role="img">⚡️</span>
        )
      </h2>
      <p>
        Counter:
        {` ${count}`}
      </p>
      <button onClick={incrementCount} type="button">Increment</button>
    </div>
  );
}

export default useMemoExample;
