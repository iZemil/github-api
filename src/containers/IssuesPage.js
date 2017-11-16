import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchIssues, getRepos, changeName, fetchUserData } from '../actions';
import Issues from '../components/Issues';
import IssuesPerPage from './IssuesPerPage';
import UserProfile from '../components/UserProfile';

// https://developer.github.com/v3/issues

class IssuesData extends Component {

  handleChangeName(e) {
    const username = e.target.value;
    this.props.changeName(username);
    
    if (username.length >= 3) {
      const url = `https://api.github.com/users/${username}/repos`
      fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        return this.props.getRepos(data)
      })
      .catch((error) => alert(`Ошибка ${error}`) )

      const url2 = `https://api.github.com/users/${username}`
      fetch(url2)
      .then((res) => res.json() )
      .then((data) => {
        console.log(data)
        return this.props.fetchUserData(data)
      })
      .catch((error) => alert(`Ошибка ${error}`) )
    }
  }

  handleChangeRepo(e) {
    const repoName = e.target.value;
    this.submitData(repoName);
  }
  
  submitData(repoName) {
    const username = this.props.user.input_name;
    
    if (username && repoName) {
      const url = `https://api.github.com/repos/${username}/${repoName}/issues`;
      fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        return this.props.fetchIssues(data)
      })
      .catch((error) => alert(`Ошибка ${error}`) )
    }
  }
  
  render() {
    return (
      <div className="issues-page">
        <UserProfile />
        <form className="form-search-issues">
          <div className="table__row">
            <label htmlFor="username">Имя пользователя: </label>
            <Input type="text" name="username" id="username"
              onChange={ this.handleChangeName.bind(this) }
            />
          </div>
          <div className="table__row">
            <label htmlFor="repoName">Выберите репозиторий: </label>
            <Input type="select" id="repoName" onChange={ this.handleChangeRepo.bind(this) }>
              <option value="">---</option>
              { this.props.user.repos.map(repo => {
                return <option value={repo.name} key={repo.id}>{repo.name}</option>
              }) }
            </Input>
          </div>
        </form>
        <IssuesPerPage />
        <Issues issues={this.props.issues} />
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
    changeName: (name) => { dispatch(changeName(name)) },
    fetchUserData: (data) => { dispatch(fetchUserData(data)) },
    getRepos: (data) => { dispatch(getRepos(data)) },
    fetchIssues: (data) => { dispatch(fetchIssues(data)) },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesData)
