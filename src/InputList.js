import React, { Component } from 'react';

class InputList extends Component {
  render() {
    return (
      <div className="InputList">
        <h3>Input Data History</h3>
        <ul>
        {this.props.value.map( (data, i) => {
          return <li key={i}>{data}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default InputList;
