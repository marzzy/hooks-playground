/* eslint-disable react/prop-types */
import React, {
  useRef, useState, forwardRef, useImperativeHandle,
} from 'react';

const MyInput = forwardRef((props, ref) => {
  const [val, setVal] = useState('');
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    testme: () => {
      document.title = val;
      inputRef.current.blur();
      console.log('inputRef.current', inputRef.current);
    },
  }));

  return (
    <input
      ref={inputRef}
      val={val}
      onChange={(e) => setVal(e.target.value)}
      onBlur={props.onBlur}
    />
  );
});

const Example01 = () => {
  const ref = useRef(null);
  const onBlur = () => {
    console.log(ref.current); // Only contains one property!
    ref.current.testme();
  };

  return <MyInput ref={ref} onBlur={onBlur} />;
};

function FWRefExample() {
  return (
    <>
      <h1>
        forwarding ref example
      </h1>
      <Example01 />
    </>
  );
}

export default FWRefExample;
