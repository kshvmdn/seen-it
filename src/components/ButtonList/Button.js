import React from 'react'

import toSentenceCase from 'utils/sentence-case'
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
      <button className={styles.button} onClick={this.handleClick.bind(this)}>{toSentenceCase(this.props.name)}</button>
    )
  }
}
