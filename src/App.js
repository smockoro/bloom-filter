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
import { sha256, sha224 } from 'js-sha256';

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
    this.initializer = this.initializer.bind(this)
  }

  initBloomFilter() {
    return [0,0,0,0,0,0,0,0,0,0]
  }

  initializer() {
    this.setState({
        bloomfilter : this.initBloomFilter(),
        inputDataList : [],
        involvedProb: 0.0
    })
  }

  changeInputData(e) {
    this.setState({inputData: e.target.value})
  }

  submitInputData(e) {
    this.updateBllomFilter(this.state.inputData)

    // 入力データの保存
    let list = this.state.inputDataList
    list.push(this.state.inputData)
    this.setState({inputDataList: list})

    // 偽陽性の確率変更
    let involvedProb = this.clucProb()
    this.setState({involvedProb: involvedProb})

    e.preventDefault()
  }

  changeCheckData(e) {
    this.setState({checkdata: e.target.value})
  }

  submitCheckData(e) {
    let involveFlag = this.checkBllomFilter(this.state.checkdata)

    alert(involveFlag)
    e.preventDefault()
  }

  updateBllomFilter(value) {
    let [index1, index2] = this.getHashIndex(value)
    let nextBloomFilter = this.state.bloomfilter
    nextBloomFilter[index1] = 1
    nextBloomFilter[index2] = 1
    this.setState({ bloomfilter : nextBloomFilter })
  }

  checkBllomFilter(value) {
    let [index1, index2] = this.getHashIndex(this.state.checkdata)
    let involveFlag = ( this.state.bloomfilter[index1] === 1 && this.state.bloomfilter[index2] === 1 ) ? "Involved" : "Not Involved"
    return involveFlag
  }

  getHashIndex(value) {
    let v1 = sha224.digest(value).reduce( (preVal, curVal) => {
        return preVal + curVal
    })
    let v2 = sha256.digest(value).reduce( (preVal, curVal) => {
        return preVal + curVal
    })
    let index1 = v1 % this.state.m
    let index2 = v2 % this.state.m

    return [index1, index2]
  }

  clucProb() {
    return Math.pow( ( 1.0 - Math.exp( -1.0 * this.state.inputDataList.length * this.state.k / this.state.m) ), this.state.k)
  }

  render() {
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
            <InitButton onClick={this.initializer}/>
            <Typography variant="caption">
              <div> False Positive Probability: {this.state.involvedProb} </div>
            </Typography>
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
