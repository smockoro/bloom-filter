import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class CheckForm extends Component {
  render() {
    return (
      <div className="CheckForm">
          <form onSubmit={(e) => this.props.onSubmit(e)}>
          <FormControl>
            <InputLabel htmlFor="input-data">Check Data</InputLabel>
            <Input id="check-data" value={this.props.data} onChange={(e) => this.props.onChange(e)} />
          </FormControl>
          <Button size='small' type='submit' color='primary' variant="raised">Involved Check</Button>
          </form>
      </div>
    );
  }
}

export default CheckForm;
