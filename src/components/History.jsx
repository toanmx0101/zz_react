import React, { Component } from 'react';
import Span from './Span'
import Button from './Button'

class History extends Component {

  onButtonClearHistory(event) {
    this.props.onButtonClearHistory(event)
  }

  render() {
    let history = []
    for (var i = 0; i <= this.props.listHistory.length - 1; i++) {
      history.push(<Span key={i} content={this.props.listHistory[i].input.join('')} />)
    }
    return (
      <React.Fragment>
        <h2>History
          {this.props.listHistory.length > 0 &&
            <Button className="clear-history" onButtonClick={this.onButtonClearHistory.bind(this)} value='Clear history'/> 
          }
        </h2>
        { this.props.listHistory.length > 0 &&
          <React.Fragment>
            {history}
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}
 export default History;
