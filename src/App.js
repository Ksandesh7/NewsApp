// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 5;
  // apikey = process.env.REACT_NEWS_APP_API_KEY1
  apikey = '86e3dcba8c30469da875d3cdd6c12b06'

  state = {
    progress:10
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar />

        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />

        <Routes>
          <Route exact path="/" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/> } />
          <Route exact path="/business" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/> } />
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/> } />
          <Route exact path="/general" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/> } />
          <Route exact path="/health" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"/> } />
          <Route exact path="/science" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science"/> } />
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports"/> } />
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology"/> } />
        </Routes>

        </Router>
      </div>
    )
  }
}