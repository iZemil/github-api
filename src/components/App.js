import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Просмотр issues с выбраного репозитория на Github</h1>
          <p></p>
        </header>
        <div className="container">
          <form className="form-search-issues">
            <div className="table__row">
              <label htmlFor="user-name">Имя пользователя: </label>
              <input type="text" id="user-name" />
            </div>
            {/* <div className="table__row">
              <label htmlFor="repository">Название репозитория: </label>
              <input type="text" id="repository" />
            </div> */}
            <input type="submit" className="btn-submit" value="Поиск" />
          </form>
          <p>ИМЯ ФАМИЛИЯ ПОЛЬЗОВАТЕЛЯ: <b>{'name'}</b></p>
        </div>
      </div>
    );
  }
}

export default App;
