import React, { Component } from 'react';
import '../styles/Button.css';
import Button from './Button'
import PropTypes from 'prop-types';
import ClearButton from'./buttons/ClearButton'
import EqualButton from'./buttons/EqualButton'
import NumberButton from'./buttons/NumberButton'
import OperandButton from'./buttons/OperandButton'

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
    console.log(this.equalButton)
    console.log(this.equalButton.className)


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
    if (this.prev.length > 0) {
      this.setState({stack: this.prev})
      this.prev = []
    }
  }
  render() {
    let buttons = [<NumberButton key={0} className="number-button" onButtonClick={this.handleClickButton.bind(this)} value={0} />]
    let operandButtons = []
    let operands = ['+', '-','*','/', 'log', '(', ')', ', ', 'pow']
    //TODO:  viet lai theo map
  
    for (var i = 1; i <= NUMBERS.length - DISPLAY_EACH_SLICE ; i+= DISPLAY_EACH_SLICE) {
      buttons.push(<div key={i}><NumberButton className="number-button" onButtonClick={this.handleClickButton.bind(this)} value={i} /><NumberButton className="number-button" onButtonClick={this.handleClickButton.bind(this)} value={i+1} /><NumberButton className="number-button" onButtonClick={this.handleClickButton.bind(this)} value={i+2} /></div>)
    }
    operandButtons = operands.map((operand) => <OperandButton className="operand-button" key={operand} onButtonClick={this.handleClickButton.bind(this)} value={operand} />);
    return (
      <React.Fragment>
        <Button onButtonClick={this.handleClickDeleteButton.bind(this)} value={'Del'} />
        <div className="operand-buttons">
          {operandButtons}
        </div>
        <div>
          {buttons}
        </div>
        <EqualButton className="equal-button" ref={(button) => { this.equalButton = button; }} onButtonClick={this.handleClickEqualButton.bind(this)} value={'Equal'} />
        <ClearButton className="clear-button" onButtonClick={this.handleClickClearButton.bind(this)} value={'Clear'} />
      </React.Fragment>
    );
  }
}
Menu.defaultProps = {
  onOperatorButtonChange: () => {},
  onButtonEqualChange: () => {}, 
  onButtonClearChange:() => {}, 
  onButtonDelChange: () => {},
  prev: []
};
Menu.propTypes = {
  prev: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))])
}

export default Menu;
