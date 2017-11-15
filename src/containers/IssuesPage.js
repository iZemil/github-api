import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues, getRepos, changeName } from '../actions';
import Issues from '../components/Issues';

// https://developer.github.com/v3/issues

class IssuesData extends Component {

  submitData(repoName) {
    const username = this.props.user.name;
    
    if (username && repoName) {
      const url = `https://api.github.com/repos/${username}/${repoName}/issues`;
      fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        return this.props.fetchData(data)
      })
      .catch((error) => alert(`Ошибка ${error}`) )
    }
  }

  handleChangeName(e) {
    const username = e.target.value;
    this.props.changeName(username);

    const url = `https://api.github.com/users/${username}/repos`
    
    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      return this.props.getRepos(data)
    })
    .catch((error) => alert(`Ошибка ${error}`) )
  }

  handleChangeRepo(e) {
    const repoName = e.target.value;
    this.submitData(repoName);
  }

  render() {
    return (
      <div className="issues-page">
        <h1>Просмотр issues с выбраного репозитория на Github</h1>
        <form className="form-search-issues">
          <div className="table__row">
            <label htmlFor="username">Имя пользователя: </label>
            <input type="text" name="username" id="username"
              defaultValue={this.props.user.name}
              onChange={ this.handleChangeName.bind(this) }
            />
          </div>
          <div className="table__row">
            <label htmlFor="repoName">Выберите репозиторий: </label>
            <select id="repoName" onChange={ this.handleChangeRepo.bind(this) }>
              <option value="">---</option>
              { this.props.user.repos.map(repo => {
                return <option value={repo.name} key={repo.id}>{repo.name}</option>
              }) }
            </select>
          </div>
        </form>
        <div className="">
          Отобразить на странице:
          <button onClick={() => console.log(10)}>10</button>
          <button onClick={() => console.log(30)}>30</button>
          <button onClick={() => console.log(50)}>50</button>
        </div>
        <Issues data={this.props.issues} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => { dispatch(fetchIssues(data)) },
    getRepos: (data) => { dispatch(getRepos(data)) },
    changeName: (name) => { dispatch(changeName(name)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesData)
