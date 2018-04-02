import React from 'react';

function withCalculatorButtonWrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        click_count: 0
      }
    }

    handleClick(event) {
      this.props.onButtonClick(event, this.props.value)
      this.setState({click_count: this.state.click_count + 1})
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent onClick={this.handleClick.bind(this)} {...this.props} />
          <span>{this.state.click_count}</span>
        </React.Fragment>
      );
    }
  };
}

export default withCalculatorButtonWrapper;