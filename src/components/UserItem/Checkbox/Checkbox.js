import React, { Component } from 'react';
import styles from './Checkbox.module.scss';

export default class Checkbox extends Component {
  handleChange = (event) => {
    const {
      target: { checked },
    } = event;
    const { onSelect } = this.props;

    onSelect(checked);
  };

  render() {
    const { value } = this.props;
    return (
      <div className={styles.container}>
        <span className={styles.title}>Select </span>
        <input type="checkbox" checked={value} onChange={this.handleChange} />
      </div>
    );
  }
}
