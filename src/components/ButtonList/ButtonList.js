import React from 'react'

import Button from './Button'
import styles from './styles.module.css'

export default class ButtonList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.button_list}>
        <Button name='next' onClick={this.props.onNextClick} />
        <Button name='previous' onClick={this.props.onPrevClick} />
        <Button name='random' onClick={this.props.onRandClick} />
      </div>
    )
  }
}
