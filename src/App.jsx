import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stack: [],
      results: 0
    }

    this.handleClickButton = this.handleClickButton.bind(this)
    this.handleClickEqualButton = this.handleClickEqualButton.bind(this)
    this.handleClickClearButton = this.handleClickClearButton.bind(this)
    this.isOperand =this.isOperand.bind(this)
  }

  handleClickButton(event, value) {
    if (this.isOperand(value)) {
      var lastCharactor = this.state.stack[this.state.stack.length - 1]
      if (!this.isOperand(lastCharactor)) {
        var joined = this.state.stack.concat(value);
        this.setState({ stack: joined })
      }
    } else {
      joined = this.state.stack.concat(value);
      this.setState({ stack: joined })
    }
  }

  handleClickEqualButton(event) {
    var lastCharactor = this.state.stack[this.state.stack.length - 1]
    while (this.isOperand(lastCharactor)) {
      this.state.stack.pop()
      lastCharactor = this.state.stack[this.state.stack.length - 1]
    }
    this.setState({results: eval(this.state.stack.join('').toString())})
  }
  handleClickClearButton(event) {
    this.setState({ results: 0 })
    this.setState({ stack: [] })
  }
  isOperand(key) {
    if ((key == '+') || (key == '-') || (key == '*') || (key == '/')){
      return true
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  render() {
    let buttons = [<Button key={0} onButtonClick={this.handleClickButton} value={0} />]
    let operandButtons = []
    let operands = ['+', '-','*','/']

    for (var i = 1; i <=7; i+=3) {
      buttons.push(<div><Button key={i} onButtonClick={this.handleClickButton} value={i} /><Button key={i+1} onButtonClick={this.handleClickButton} value={i+1} /><Button key={i+2} onButtonClick={this.handleClickButton} value={i+2} /></div>)
    }
    for (var i = 0; i <= 3; i++) {
      operandButtons.push(<Button key={operands[i]} onButtonClick={this.handleClickButton} value={operands[i]} />)
    }

    // operandButtons = numbers.map((i) =>
    //   <Button key={i} onButtonClick={this.handleClickButton} value={i} />
    // );
    return (
      <React.Fragment>
        <h2>Calculator</h2>
        <div class="input-calculator">
          <span>{this.state.stack.join('') == "" ? 0 : this.state.stack.join('') }</span>
        </div>
        <div class="operand-buttons">
          {operandButtons}
        </div>
        <div>
          {buttons}
        </div>
        <div class="div-results">
          <span class="results">{this.state.results}</span>  
        </div>
        <Button onButtonClick={this.handleClickEqualButton} value={'Equal'} />
        <Button onButtonClick={this.handleClickClearButton} value={'Clear'} />
      </React.Fragment>
    );
  }
}

export default App;