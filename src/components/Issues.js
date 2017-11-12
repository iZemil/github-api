import React, { Component } from 'react';

export default class Issues extends Component {

  render() {
    const { data } = this.props;

    return (
      <div className="issues">
        {data ? data.map((issue, index) => {
          return (
            <div className="issue" key={index}>
              <a href={issue.html_url} className="issue__title">{ issue.title }</a>
              <div className="issue__opened-by">
                <span>#{ issue.number }</span>
                открыто <time>{ issue.created_at }</time>
              </div>
            </div>
          )
        }) : 'Нет данных'}
      </div>
    )
  }
}

