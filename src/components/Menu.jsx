import React, { Component } from 'react';
import '../styles/Button.css';
import Button from './Button'
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const DISPLAY_EACH_SLICE = 3

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stack: [],
      results: 0
    }
    this.isOperand = this.isOperand.bind(this)
    this.prev = []
  }

  handleClickButton(event, value) {
    var joined = this.state.stack
    if (this.isOperand(value)) {
      var lastCharactor = this.state.stack[this.state.stack.length - 1]
      if (!this.isOperand(lastCharactor)) {
        joined = this.state.stack.concat(value)
        this.setState({ stack: joined })
      }
    } else {
      joined = this.state.stack.concat(value)
      this.setState({ stack: joined })
    }
    this.props.onOperatorButtonChange(joined)
  }

  handleClickEqualButton(event) {
    var lastCharactor = this.state.stack[this.state.stack.length - 1]
    while (this.isOperand(lastCharactor)) {
      this.state.stack.pop()
      lastCharactor = this.state.stack[this.state.stack.length - 1]
    }
    var operator = this.state.stack.join('').toString()
    
    this.setState({results: eval(operator.replace(/log/g, 'this.log').replace(/pow/g, 'Math.pow'))})
    this.props.onButtonEqualChange(eval(operator.replace(/log/g, 'this.log').replace(/pow/g, 'Math.pow')))
  }

  handleClickClearButton(event) {
    this.setState({ results: 0 })
    this.setState({ stack: [] })
    this.prev = []
    this.props.onButtonClearChange(event)
  }

  handleClickDeleteButton(event) {
    this.setState({stack: this.state.stack.slice(0, -1)})
    this.props.onButtonDelChange(this.state.stack.slice(0, -1))
  }
  isOperand(key) {
    if ((key === '+') || (key === '-') || (key === '*') || (key === '/')){
      return true
    }
  }

  log(x, y) {
    return Math.log(y) / Math.log(x);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.prev !== undefined) {
      this.prev = nextProps.prev
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    if (this.prev.length > 0) {
      this.setState({stack: this.prev})
      this.prev = []
    }
  }
  render() {
    console.log("Render")
    let buttons = [<Button key={0} onButtonClick={this.handleClickButton.bind(this)} value={0} />]
    let operandButtons = []
    let operands = ['+', '-','*','/', 'log', '(', ')', ', ', 'pow']
    //TODO:  viet lai theo map
  
    for (var i = 1; i <= NUMBERS.length - DISPLAY_EACH_SLICE ; i+= DISPLAY_EACH_SLICE) {
      buttons.push(<div key={i}><Button onButtonClick={this.handleClickButton.bind(this)} value={i} /><Button onButtonClick={this.handleClickButton.bind(this)} value={i+1} /><Button onButtonClick={this.handleClickButton.bind(this)} value={i+2} /></div>)
    }
    operandButtons = operands.map((operand) => <Button key={operand} onButtonClick={this.handleClickButton.bind(this)} value={operand} />);
    return (
      <React.Fragment>
        <Button onButtonClick={this.handleClickDeleteButton.bind(this)} value={'Del'} />
        <div className="operand-buttons">
          {operandButtons}
        </div>
        <div>
          {buttons}
        </div>
        <Button onButtonClick={this.handleClickEqualButton.bind(this)} value={'Equal'} />
        <Button onButtonClick={this.handleClickClearButton.bind(this)} value={'Clear'} />
      </React.Fragment>
    );
  }
}
 export default Menu;
