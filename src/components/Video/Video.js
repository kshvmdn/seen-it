import React from 'react'

import unescapeHTML from 'utils/unescape-html'
import styles from './styles.module.css'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
  }

  get video() {
    return {__html: unescapeHTML(this.props.currentVideo.media_embed.content)}
  }

  render() {
    return (
      <div className={styles.video} dangerouslySetInnerHTML={this.video}></div>
    )
  }
}
