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
  }

  handleClickButton(event, value) {
    this.setState({stack: this.state.stack.push(value)})
    console.log(this.state.stack.join(''))
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
    let buttons = []
    let operands = ['+', '-','*','/']
    for (var i = 0; i <=9; i++) {
      buttons.push(<Button key={i} onButtonClick={this.handleClickButton} value={i} />)
    }
    return (
      <React.Fragment>
        <span>{}</span>
        <div>
          <Button onButtonClick={this.handleClickButton} value={'+'} />
          <Button onButtonClick={this.handleClickButton} value={'-'} />
          <Button onButtonClick={this.handleClickButton} value={'*'} />
          <Button onButtonClick={this.handleClickButton} value={'/'} />
        </div>
        <div>
          {buttons}
        </div>
        <span>{this.state.results}</span>
        <Button onButtonClick={this.handleClickButton} value={'Equal'} />
      </React.Fragment>
    );
  }
}

export default App;