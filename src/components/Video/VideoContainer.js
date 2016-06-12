import React from 'react'

import Video from './Video'
import styles from './styles.module.css'

export default class VideoContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.video_container}>
        <Video />
        <div className={styles.meta}></div>
      </div>
    )
  }
}
