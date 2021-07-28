/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, {
  useCallback, useState, useMemo, memo,
} from 'react';

function CountButton({ onClick, count, buttonNum }) {
  console.log('rerender button with buttonNumber of ', buttonNum);
  return (
    <button onClick={onClick}>
      Button Number
      {' '}
      {count}
    </button>
  );
}

// const MemoisedCountButton = memo(({ onClick, count, buttonNum }) => {
//   console.log('rerender button with buttonNumber of ', buttonNum);
//   return (
//     <button onClick={onClick}>
//       Button Number
//       {' '}
//       {count}
//     </button>
//   );
// });
const MemoisedCountButton = memo(CountButton);

function DualCounter01() {
  const [count1, setCount1] = useState(0);
  function increment1() {
    setCount1((c) => c + 1);
  }

  const [count2, setCount2] = useState(0);
  function increment2() {
    setCount2((c) => c + 1);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoisedButton = useMemo(() => (
    <CountButton buttonNum={1} count={count1} onClick={increment1} />
  ),
  [count1]);

  return (

    <>
      {memoisedButton}
      <br />
      <CountButton buttonNum={2} count={count2} onClick={increment2} />
    </>

  );
}

function DualCounter02() {
  const [count1, setCount1] = useState(0);
  function increment1() {
    setCount1((c) => c + 1);
  }

  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => {
    setCount2((c) => c + 1);
  }, []);

  return (

    <>
      <MemoisedCountButton buttonNum={1} count={count1} onClick={increment1} />
      <br />
      <MemoisedCountButton buttonNum={2} count={count2} onClick={increment2} />
    </>

  );
}

function DualCounter03() {
  const [count1, setCount1] = useState(0);
  function increment1() {
    setCount1((c) => c + 1);
  }

  const [count2, setCount2] = useState(0);
  function increment2() {
    setCount2((c) => c + 1);
  }

  const MemoisedCounterButton = useCallback(() => (
    <MemoisedCountButton buttonNum={2} count={count2} onClick={increment2} />
  ), [count2]);

  return (

    <>
      <CountButton buttonNum={1} count={count1} onClick={increment1} />
      <br />
      <MemoisedCounterButton />
    </>

  );
}

function DualCounter() {
  return (
    <>
      <h1>different reduce unnecessary rerenders examples</h1>
      <h2>in each item only one of the components memoised</h2>
      <div>
        <span>
          DualCounter01 :
        </span>
        <br />
        <DualCounter01 />
      </div>
      <br />
      <br />
      <br />

      <div>
        <span>
          DualCounter02 :
        </span>
        <br />
        <DualCounter02 />
      </div>
      <br />
      <br />
      <br />

      <div>
        <span>
          DualCounter03 :
        </span>
        <br />
        <DualCounter03 />
      </div>
    </>
  );
}
export default DualCounter;
