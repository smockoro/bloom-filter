import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputdata: props.inputdata
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({inputData: this.refs.inputData.value})
    this.refs.inputData.value = '';
  }

  render() {
    return (
      <div className="InputForm">
        <input ref="inputData"  type='text' />
        <button onClick={this.submit} >Submit</button>
        {this.state.inputData}
      </div>
    );
  }
}

export default InputForm;
