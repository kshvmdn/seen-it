import React from 'react'
import classNames from 'classnames'

import toSentenceCase from 'utils/sentenceCase'
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
      <a href='#' className={classNames(styles.button, this.props.name)} onClick={this.handleClick.bind(this)}>
        {toSentenceCase(this.props.name)}
      </a>
    )
  }
}
