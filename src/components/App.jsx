import React, { Component } from 'react';
import '../styles/App.css';
import Button from './Button'
import Span from './Span'
import Menu from './Menu'
import History from './History'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      results: 0,
      history: [],
      prev: ''
    }
  }
  onButtonEqualChange(results) {
    this.setState({ results: results });
  }
  onButtonClearChange() {
    var history = this.state.history.concat({input: this.state.input, results: this.state.results})
    this.setState({history: history})
    this.setState({input: '', results: 0})
  }
  onOperatorButtonChange(input) {
    this.setState({input: input})
  }
  onButtonDelChange(input) {
    this.setState({input: input})
  }
  onButtonClearHistory(input) {
    this.setState({history: []})
  }
  onButtonBackClick(event) {
    var operator = this.state.history.pop()
    this.setState({prev: operator.input })
    this.setState({input: operator.input })
  }
  componentDidMount() {
    console.log("======DID MOUNT=====")
  }
  render() {
    console.log("======RENDER=====")
    return (
      <React.Fragment>
        <div className="calculator">
          <h2>Calculator 
          
            {this.state.history.length >= 1 && 
              <Button className="clear-history" onButtonClick={this.onButtonBackClick.bind(this)} value='Back'/>
            }
          </h2>
          <Span className="input-calculator" content={this.state.input}/>
          <Menu prev={this.state.prev} onOperatorButtonChange={this.onOperatorButtonChange.bind(this)} onButtonEqualChange={this.onButtonEqualChange.bind(this)} onButtonClearChange={this.onButtonClearChange.bind(this)} onButtonDelChange={this.onButtonDelChange.bind(this)}/>
          <Span className="div-results" content={this.state.results}/>
        </div>
        <div className="history">
          <History listHistory={this.state.history} onButtonClearHistory={this.onButtonClearHistory.bind(this)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;