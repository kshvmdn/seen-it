import React from 'react'

import { toSentenceCase } from 'utils/helpers'

import styles from './styles.module.css'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    return this.props.onClick(this.props.name)
  }

  render() {
    return (
      <input className={styles.button} type='button' value={toSentenceCase(this.props.name)} onClick={this.handleClick.bind(this)} />
    )
  }
}
