import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Issues extends Component {

  render() {
    const { issues } = this.props;

    return (
      <div className="issues">
        {issues.list ? issues.list.map((issue) => {
          return (
            <div className="issue" key={issue.id}>
              <Link to={`/detail/${issue.number}`} className="issue__title">{ issue.title }</Link>
              <div className="issue__opened-by">
                <span>#{ issue.number }</span>
                открыто <time>{ issue.created_at.match(/\d{4}-\d{2}-\d{2}/) }</time>
              </div>
            </div>
          )
        }) : null}
      </div>
    )
  }
}

