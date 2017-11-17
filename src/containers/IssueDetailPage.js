import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class IssueDetailPage extends Component {

  state = {
    issueNum: null,
    url: '',
    comments: 0,
    state: '',
    title: '',
    body: ''
  }

  fetchIssueDetail() {
    const owner = this.props.user.input_name;
    const repo = this.props.issues.repoName;
    const number = +this.props.match.url.match(/[\d]+/);

    console.log(owner, repo, number);

    const url = `https://api.github.com/repos/${owner}/${repo}/issues/${number}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        console.log(data);
        this.setState({
          issueNum: data.number,
          url: data.html_url,
          comments: data.comments,
          state: data.state,
          title: data.title,
          body: data.body
        })
      })
      .catch((error) => alert('Oops! . There Is A Problem') )
  }

  componentDidMount() {
    this.fetchIssueDetail();
  }

  render() {

    return (
      <div>
        <Link to="/">← Назад</Link>
        <h2 className="about-page__title">#{this.state.issueNum} {this.state.title}</h2>
        <p>Статус: {this.state.state}</p>
        <p>{this.state.body}</p>
        <p>Количество комментариев: {this.state.comments}</p>
        <p><a href={this.state.url} target="_blank">Ссылка на issue</a></p>
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

export default connect(mapStateToProps)(IssueDetailPage)