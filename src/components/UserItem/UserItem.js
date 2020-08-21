import React, { Component } from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  deleteHandler = () => {
    this.props.deleteUser(this.props.cell);
  };

  onSelect = (checked) => {
    this.setState({
      isSelected: checked,
    });
  };

  render() {
    const {
      name,
      location,
      email,
      cell,
      picture: { medium: imgSrc },
    } = this.props;

    const { isSelected } = this.state;

    return (
      <div
        className={`${styles.userItemContainer} 
        ${isSelected ? `${styles.active}` : ''}`}
      >
        <div className={styles.removeCardBut} onClick={this.deleteHandler}>
          X
        </div>
        <div className={styles.userAvatar}>
          <img src={imgSrc} alt="avatar" />
        </div>
        <div>{`${name.first} ${name.last}`}</div>
        <div>{`${location.country}, ${location.city}`}</div>
        <div>Phone: {cell}</div>
        <div>Email: {email}</div>
        <Checkbox value={isSelected} onSelect={this.onSelect} />
      </div>
    );
  }
}
