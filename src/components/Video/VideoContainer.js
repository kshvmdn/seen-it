import React from 'react'
import classNames from 'classnames'

import Video from './Video'
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

    return (
      <div className={styles.wrapper}>
        <Video currentVideo={this.state.video} />
        <div className={styles.meta}></div>
      </div>
    )
  }
}
