import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: `Reading`, count: 0 },
      { id: 2, name: `Running`, count: 0 },
      { id: 3, name: `Coding`, count: 0 },
    ]
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // habits[index].count--;
    // if (habits[index].count < 0) habits[index].count = 0
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    const habits = this.state.habits.filter(itme => itme.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    // const habits = [...this.state.habits]; // 배열의 '요소' 를 복사
    // const newHabit = { id: habits.length + 1, name: name, count: 0 };
    // habits.push(newHabit);
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = [...this.state.habits];
    // habits.forEach(item => item.count = 0);
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log(`app`)
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;
