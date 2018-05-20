import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <div className="InputForm">
        <form onSubmit={this.props.onSubmit}>
        <input type='text' value={this.props.data} onChange={(e) => this.props.onChange(e)}/>
        <button type='submit' >Submit</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
