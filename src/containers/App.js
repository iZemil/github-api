import React, { Component } from 'react';
import IssuesPage from './IssuesPage';
import Menu from '../components/Menu';
import AboutPage from '../components/AboutPage';
import IssueDetailPage from '../components/IssueDetailPage';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Route
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <main className="container">
          <Route exact path="/" component={IssuesPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/detail" component={IssueDetailPage}/>
        </main>
      </div>
    );
  }
}

export default App;
