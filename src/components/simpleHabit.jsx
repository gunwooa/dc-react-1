import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => { // 마운트 + state가 업데이트 될 때 호출됨
    console.log(`mounted & updated : ${count}`);
  }, []); // [] : 마운트 될 때만 호출 됨, [count]: 마운트 + count state가 변경될 때 호출 됨

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
