import React, { Component } from 'react';

export default class UserProfile extends Component {

  render() {
    const user = this.props.user.data;

    return (
      user.isFetching ? 
      <div className="user-profile">
        <h2>Профиль пользователя</h2>
        <img src={user.avatar_url} className="user-profile__avatar" alt="avatar" />
        <div className="user-profile__data">
          <p>@{user.login}</p>
          <p>Имя: {user.name}</p>
          <p>Открытых репозиториев: {user.public_repos}</p>
          <a href={user.url}>Ссылка на Github</a>
        </div>
      </div>
       : null
    );
  }
}

