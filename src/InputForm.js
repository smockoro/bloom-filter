import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class InputForm extends Component {
  render() {
    return (
      <div className="InputForm">
          <form onSubmit={(e) => this.props.onSubmit(e)}>
          <FormControl>
            <InputLabel htmlFor="input-data">Input Data</InputLabel>
            <Input id="name-simple" value={this.props.data} onChange={(e) => this.props.onChange(e)} />
          </FormControl>
          <Button size='small' type='submit' color='primary' variant="raised">Submit</Button>
          </form>
      </div>
    );
  }
}

export default InputForm;
