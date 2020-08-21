import React, { Component } from 'react';
import styles from './Error.module.scss';

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHided: false,
    };
  }

  render() {
    return (
      <div className={styles.errorContainer}>
        {this.props.txt}
        <div onClick={this.props.clearError} className={styles.closeError}>
          X
        </div>
      </div>
    );
  }
}
