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
        <Button name='next'
                onClick={this.props.onClick} />
        <Button name='previous'
                onClick={this.props.onClick} />
        <Button name='random'
                onClick={this.props.onClick} />
      </div>
    )
  }
}
