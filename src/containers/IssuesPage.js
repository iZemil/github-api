import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchIssues, getRepos, changeName, fetchUserData } from '../actions';
import Issues from '../components/Issues';
import IssuesPerPage from './IssuesPerPage';
import UserProfile from '../components/UserProfile';
import { Alert } from 'reactstrap';

// https://developer.github.com/v3/issues

class IssuesPage extends Component {

  handleChangeName(e) {
    const username = e.target.value;
    this.props.changeName(username);
    
    if (username.length >= 3) {
      const url1 = `https://api.github.com/users/${username}/repos`
      fetch(url1)
      .then(res => res.json())
      .then(data => {
        this.props.getRepos(data)
      })
      .catch((error) => console.log(`Ошибка ${error}`) )

      const url2 = `https://api.github.com/users/${username}`
      fetch(url2)
      .then((res) => res.json() )
      .then((data) => {
        this.props.fetchUserData(data)
      })
      .catch((error) => console.log(`Ошибка ${error}`) )
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
        return this.props.fetchIssues(data, repoName)
      })
      .catch((error) => alert(`Ошибка ${error}`) )
    }
  }
  
  render() {
    const { user } = this.props;
    
    return (
      <div className="issues-page">
        <UserProfile user={user} />
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
              { user.repos instanceof Array ? user.repos.map(repo => {
                return <option value={repo.name} key={repo.id}>{repo.name}</option>
              }) : null}
            </Input>
          </div>
        </form>
        <Alert color="warning">
          Warning alert — check it out!
        </Alert>
        <Alert color="success">
          This is a success alert — check it out!
        </Alert>
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
    fetchIssues: (data, repoName) => { dispatch(fetchIssues(data, repoName)) },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage)
