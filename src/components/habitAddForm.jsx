import React, { memo } from 'react';

const HabitAddForm = memo((props) => { // memo : Class형 컴포넌트의 PureComponent 와 같은 역할
  const formRef = React.createRef();
  const inputRef = React.createRef(); // vue의 v-model 같은 느낌

  const onSubmit = (event) => {
    event.preventDefault(); // 브라우저 리로드 막아줌
    const name = inputRef.current.value;
    name && props.onAdd(name); // 이름이 존재하면
    // inputRef.current.value = ``; // null: O, undefined: X
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="습관을 입력하세요!"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

 
export default HabitAddForm;