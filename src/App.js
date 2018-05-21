import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
      checkdata: '',
      inputDataList: [],
      m: 10,
      k: 2,
      bloomfilter: this.initBloomFilter(),
      involvedProb: 0.0,
    }
    this.changeInputData = this.changeInputData.bind(this)
    this.submitInputData = this.submitInputData.bind(this)
    this.changeCheckData = this.changeCheckData.bind(this)
    this.submitCheckData = this.submitCheckData.bind(this)
  }

  initBloomFilter() {
    return [0,0,0,0,0,0,0,0,0,0] // 動的にしたいなあ
  }

  changeInputData(e) {
    this.setState({inputData: e.target.value})
  }

  submitInputData(e) {
    // updateBllomFilter(this.state.inputData) ブルームフィルタへの登録をする
    let list = this.state.inputDataList
    list.push(this.state.inputData)
    this.setState({inputDataList: list})
    e.preventDefault()
  }

  changeCheckData(e) {
    this.setState({checkdata: e.target.value})
  }

  submitCheckData(e) {
    let involvedProb = this.clucProb()
    this.setState({involvedProb: involvedProb})
    alert(console.log("CHECK"))
    e.preventDefault()
  }

  updateBllomFilter(value) {
    //hash 1
    //hash 2
    // bloomfilter update
  }

  clucProb() {
  }

  render() {
    console.log(this.state.bloomfilter)
    return (
      <div className="App">
        <Paper elevation={4}>
        <CssBaseline />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="headline" component="h1">
              Bllom Filter Sample Application
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputForm value={this.state.inputdata} 
                       onChange={this.changeInputData}
                       onSubmit={this.submitInputData}
            />
          </Grid>
          <Grid item xs={12}>
            <CheckForm value={this.state.checkData} 
                       onChange={this.changeCheckData}
                       onSubmit={this.submitCheckData}
            />
          </Grid>
          <Grid item xs={12}>
            <InitButton onClick={this.initBloomFilter}/>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="headline" component="h3">
              Bllom Filter Data Structure
            </Typography>
            <BllomFilter value={this.state.bloomfilter}/>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="headline" component="h3">
              Input Data History
            </Typography>
            <InputList value={this.state.inputDataList}/>
          </Grid>
        </Grid>
        </Paper>
      </div>
    );
  }
}

export default App;
