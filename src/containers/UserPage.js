import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'izemil',
      name:'',
      avatar:''
    }
  }

  getData(e) {
    e.preventDefault();

    const username = e.target.elements.username.value;
    e.target.elements.username.value = "";
    // GET /users/:username
    let url = `https://api.github.com/users/${username}`;

    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        console.log(data);

        return data;
      })
      .catch((error) => console.log('Fuck the Police!') )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Просмотр issues с выбраного репозитория на Github</h1>
          <p></p>
        </header>
        <div className="container">
          <form className="form-search-issues"
            onSubmit={ this.getData.bind(this) }>
            <div className="table__row">
              <label htmlFor="username">Имя пользователя: </label>
              <input type="text" name="username" id="username" defaultValue="iZemil" />
            </div>
            {/* <div className="table__row">
              <label htmlFor="repository">Название репозитория: </label>
              <input type="text" id="repository" />
            </div> */}
            <input type="submit" className="btn-submit" value="Поиск" />
          </form>
          <p>ИМЯ ФАМИЛИЯ ПОЛЬЗОВАТЕЛЯ: <b>{this.state.name}</b></p>
        </div>
      </div>
    );
  }
}

export default App;
