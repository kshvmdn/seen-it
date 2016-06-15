import React from 'react'

import unescapeHTML from 'utils/unescapeHTML'
import styles from './styles.module.css'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let currentVideo = this.props.currentVideo;

    if (!currentVideo.media_embed || !currentVideo.media_embed.content || currentVideo.self_post) {
      // TODO
    }
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
