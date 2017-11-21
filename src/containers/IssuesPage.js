import React, { Component } from 'react';
import { Input, Alert, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchIssues, getRepos, changeName, fetchUserData, catchErrors } from '../actions';
import Issues from '../components/Issues';
import IssuesPerPage from './IssuesPerPage';
import UserProfile from '../components/UserProfile';

// https://developer.github.com/v3/issues

class IssuesPage extends Component {

  handleChangeName(e) {
    const username = e.target.value;
    this.props.changeName(username);
    
  }

  handleClickFetchUserData() {
    const username = this.props.user.input_name;
    if (username.length >= 3) {

      // fetching user repos
      const userReposUrl = `https://api.github.com/users/${username}/repos`
      fetch(userReposUrl)
      .then(res => res.json())
      .then(data => {
        this.props.getRepos(data)
      })
      .catch((error) => { console.log(`Ошибка ${error}`); this.props.catchErrors() } )

      // fetching user data
      const userDataUrl = `https://api.github.com/users/${username}`
      fetch(userDataUrl)
      .then((res) => res.json() )
      .then((data) => {
        this.props.fetchUserData(data)
      })
      .catch((error) => { console.log(`Ошибка ${error}`); this.props.catchErrors() } )
    }
  }

  handleChangeRepo(e) {
    const repoName = e.target.value;
    this.submitData(repoName);
  }
  
  // Fetching issues of selected repository
  submitData(repoName) {
    const username = this.props.user.input_name;
    
    if (username && repoName) {
      const url = `https://api.github.com/repos/${username}/${repoName}/issues`;
      fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.props.fetchIssues(data, repoName)
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
            <Button color="secondary" className="fetch-repos-btn"
              onClick={ this.handleClickFetchUserData.bind(this) }
            >Запрос →</Button>
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
        { user.errors ? <Alert color="warning">Ошибка получения данных!</Alert> : null }
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
    catchErrors: () => { dispatch(catchErrors()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage)
