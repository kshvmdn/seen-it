import React from 'react'

import styles from './styles.module.css'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.video}></div>
    )
  }
}
