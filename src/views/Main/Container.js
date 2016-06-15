import React from 'react'

import Header from 'components/Header/Header'
import VideoContainer from 'components/Video/VideoContainer'
import ButtonList from 'components/ButtonList/ButtonList'
import { getTopSubmissions } from 'utils/reddit'
import styles from './styles.module.css'

export default class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      currentVideoIndex: -1
    }
  }

  componentDidMount() {
    getTopSubmissions('videos')
      .then((res) => {
        this.setState({ videos: res })
        this.onButtonClick('next')
      })
      .catch((err) => console.error(err))
  }

  onButtonClick(event) {
    let currentIndex = this.state.currentVideoIndex
    let newIndex = currentIndex

    if (event === 'random') {
      do {
        newIndex = Math.floor((Math.random() * this.state.videos.length) + 1)
      } while (newIndex === currentIndex)
    } else {
      // +1 if `next`, -1 if `previous`
      newIndex += (event === 'next') ? (currentIndex < 100 ? 1 : 0) : (currentIndex > 0 ? -1 : 0)
    }

    this.setState({
      currentVideoIndex: newIndex
    }, () => {
      let currentVideo = this.state.videos[this.state.currentVideoIndex]
      if (!currentVideo.data || !currentVideo.data.media_embed || !currentVideo.data.media_embed.content || currentVideo.self_post) {
        this.onButtonClick(event)
      }
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <VideoContainer
            video={this.state.videos[this.state.currentVideoIndex]}
            onError={this.onButtonClick.bind(this)} />


          <ButtonList onClick={this.onButtonClick.bind(this)} />
        </div>
      </div>
    )
  }
}
