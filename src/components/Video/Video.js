import React from 'react'

import styles from './styles.module.css'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.video}>{this.props.currentVideo.media_embed.content}</div>
    )
  }
}
