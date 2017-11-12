import React, { Component } from 'react';
import IssuesPage from './IssuesPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <IssuesPage />
        </div>
      </div>
    );
  }
}

export default App;
