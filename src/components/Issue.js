import React, { Component } from 'react';

export default class Issue extends React {
  render() {
    return (
      <div className="issues">
        <div className="issue">
          <div className="issue__title">Заголовок issue</div>
          <div className="issue__opened-by">
            <span>#номер</span>
            открыто <time>13.02.17</time>
          </div>
        </div>
      </div>
    )
  }
}