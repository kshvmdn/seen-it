import React from 'react'

import styles from './styles.module.css'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input className={styles.button} type='button' value={this.props.name} onclick={this.props.onClick} />
    )
  }
}
