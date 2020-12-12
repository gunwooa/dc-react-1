import React, { Component } from 'react';


class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef(); // vue의 v-model 같은 느낌

  onSubmit = (event) => {
    event.preventDefault(); // 브라우저 리로드 막아줌
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); // 이름이 존재하면
    // this.inputRef.current.value = ``; // null: O, undefined: X
    this.formRef.current.reset();
  };
  render() {
    console.log(`habitAddForm`)
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="습관을 입력하세요!"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
 
export default HabitAddForm;