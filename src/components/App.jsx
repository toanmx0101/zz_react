import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Calculator from './Calculator.jsx'
import Article from './articles/Article.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="xxx">
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/calculator">Calculator</Link></li>
              <li><Link to="/article">Article</Link></li>
            </ul>
          </div>
          <Route exact path="/" render={ ( ) => (<h2> HomePage </h2>) } />
          <Route path="/calculator" component={Calculator}/>
          <Route path="/article" component={Article}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;