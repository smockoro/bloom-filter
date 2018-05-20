import React, { Component } from 'react';
import BllomFilter from './BllomFilter';
import InitButton from './InitButton';
import InputForm from './InputForm';
import InputList from './InputList';
import CheckForm from './CheckForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputData: "",
    };
  }

  render() {
    console.log(this.state.inputData)
    return (
      <div className="App">
        <h1>Bllom Filter Sample Application</h1>
        <InputForm data="data" />
        <CheckForm />
        <InitButton />
        <BllomFilter />
        <InputList />
      </div>
    );
  }
}

export default App;
