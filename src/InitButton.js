import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class InitButton extends Component {
  render() {
    return (
      <div className="InitButton">
       <Button size='small' type='submit' color='secondary' variant="raised" onClick={(e) => this.props.onClick() }>Init Data</Button>
      </div>
    );
  }
}

export default InitButton;
