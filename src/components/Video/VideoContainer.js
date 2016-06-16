import React from 'react'
import classNames from 'classnames'

import Video from './Video'
import ButtonList from 'components/ButtonList/ButtonList'
import normalizeTime from 'utils/normalizeTime'
import { formURL } from 'utils/reddit'

import styles from './styles.module.css'

export default class VideoContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      video: null,
      loading: true
    }
  }

  componentDidMount() {
    if (this.props.video) {
      this.parseResponse(this.props.video)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.video && (prevProps.video !== this.props.video)) {
      this.parseResponse(this.props.video);
    }
  }

  parseResponse(response) {
    this.setState({
      loading: true
    }, () => {
      this.setState({
        video: response.data,
        loading: false
      })
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className={classNames(styles.wrapper, styles.loading)}>Loading...</div>
      )
    }

    let video = this.state.video

    return (
      <div className={styles.wrapper}>
        <div className={styles.video_meta}>
          <div className={styles.video_title}>
            <a href={formURL(video.permalink)} title={video.title}>
              {video.title}
            </a>
          </div>
          <div className={styles.video_created}>
            {normalizeTime(video.created_utc)}
          </div>
          <div className={styles.video_stats}>
            <div className={styles.upvotes}>
              <span className={styles.number}>{video.ups}</span> upvotes
            </div>
            <div className={styles.comment_count}>
              <span className={styles.number}>{video.num_comments}</span> comments
            </div>
          </div>
          <div className={styles.video_url}>
            <a href={video.url} title={video.title}>{video.url}</a>
          </div>
        </div>
        <Video currentVideo={video} />
        <ButtonList onClick={this.props.onButtonClick} />
      </div>
    )
  }
}
