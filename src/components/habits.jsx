import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {
  handleAdd = name => {
    this.props.onAdd(name);
  };
  render() {
    console.log(`habits`)
    return (
      <div className="habits">
        <HabitAddForm
          onAdd={this.handleAdd}
        />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrease={this.props.onDecrease}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button
          className="habits-reset"
          onClick={this.props.onReset}
        >
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;