import React, { Component } from 'react';
import IssuesPage from '../containers/IssuesPage';
import Menu from './Menu';
import AboutPage from './AboutPage';
import IssueDetailPage from '../containers/IssueDetailPage';
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
          <Route path="/detail/:id" component={IssueDetailPage}/>
        </main>
      </div>
    );
  }
}

export default App;
