import React, { Component } from 'react';

class InputList extends Component {
  render() {
    return (
      <div className="InputList">
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
