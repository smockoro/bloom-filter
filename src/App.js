import React, { Component } from 'react';
import BllomFilter from './BllomFilter';
import InitButton from './InitButton';
import InputForm from './InputForm';
import InputList from './InputList';
import CheckForm from './CheckForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputdata: '',
    }
    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
  }

  change(e) {
    this.setState({inputData: e.target.value})
  }

  submit() {
    // ブルームフィルタへの登録をする
    alert(this.state.inputData);
  }

  render() {
    return (
      <div className="App">
        <h1>Bllom Filter Sample Application</h1>
        <InputForm value={this.state.inputData} onChange={this.change} onSubmit={this.submit}/>
        <CheckForm />
        <InitButton />
        <BllomFilter />
        <InputList />
      </div>
    );
  }
}

export default App;
