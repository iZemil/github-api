import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions';
import Issues from '../components/Issues';

class IssuesData extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const element = e.target.elements;
    const username = element.username.value.trim();
    const repoName = element.repoName.value.trim();
    
    // https://developer.github.com/v3/issues
    if(username && repoName) {
      let url = `https://api.github.com/repos/${username}/${repoName}/issues`;
      fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        return this.props.fetchData(data)
      })
      .catch((error) => alert(`Ошибка ${error}`) )
    }
    
    element.username.value = "";
    element.repoName.value = "";
  }

  render() {
    return (
      <div className="issues-page">
        <h1>Просмотр issues с выбраного репозитория на Github</h1>
        <form className="form-search-issues"
          onSubmit={ this.handleSubmit.bind(this) }>
          <div className="table__row">
            <label htmlFor="username">Имя пользователя: </label>
            <input type="text" name="username" id="username" defaultValue="twbs" />
          </div>
          <div className="table__row">
            <label htmlFor="repoName">Название репозитория: </label>
            <input type="text" id="repoName" defaultValue="bootstrap" />
          </div>
          <input type="submit" className="btn-submit" value="Поиск" />
        </form>
        <Issues data={this.props.issues} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => { dispatch(fetchIssues(data)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesData)
