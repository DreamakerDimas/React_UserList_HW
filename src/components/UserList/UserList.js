import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import UserItem from '../UserItem/UserItem';
import Error from '../Error/Error';
import { getData } from '../../api';
import styles from './UserList.module.scss';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      showText: false,
      error: null,
    };
  }

  componentDidMount = async () => {
    this.fetchUsers();
  };

  fetchUsers = async () => {
    try {
      this.setState({
        isFetching: true,
      });

      const newUsers = await getData();

      this.setState({
        users: [...this.state.users, ...newUsers],
        isFetching: false,
      });
    } catch (err) {
      this.setState({
        isFetching: false,
        error: { txt: err.message },
      });
    }
  };

  mapUsers = () => {
    return this.state.users.map((user) => (
      <UserItem {...user} key={user.cell} deleteUser={this.deleteUser} />
    ));
  };

  deleteUser = (cell) => {
    this.setState({
      users: this.state.users.filter((item) => item.cell !== cell),
    });
  };

  changeTextState = (e) => {
    e.preventDefault();
    this.setState({
      showText: !this.state.showText,
    });
  };

  showTextInDiv = () => {
    return this.state.showText ? 'Hide' : 'Show';
  };

  clearError = () => {
    this.setState({
      error: null,
    });
  };

  render() {
    const { users, isFetching, error } = this.state;

    return (
      <>
        {error && <Error txt={error.txt} clearError={this.clearError} />}
        <div className={styles.container}>
          {isFetching && <Spinner />}

          {users.length > 0 && this.mapUsers()}

          <div onClick={this.fetchUsers} className={styles.loadButton}>
            LOAD
          </div>

          <div onClick={this.changeTextState}>{this.showTextInDiv()}</div>
        </div>
      </>
    );
  }
}
