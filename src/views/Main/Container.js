import React from 'react'

import Header from 'components/Header/Header'
import VideoContainer from 'components/Video/VideoContainer'
import ButtonList from 'components/ButtonList/ButtonList'
import { getTopPosts } from 'utils/reddit'
import styles from './styles.module.css'

export default class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      currentVideoIndex: 0
    }
  }

  componentDidMount() {
    getTopPosts('videos')
      .then((res) => this.setState({ videos: res.data.data.children }))
      .catch((err) => { console.error(err) })
  }

  onButtonClick(event) {
    let currentIndex = this.state.currentVideoIndex
    let newIndex = currentIndex

    if (event === 'random') {
      // TODO
    } else {
      // +1 if `next`, -1 if `previous`
      newIndex += (event === 'next') ? (currentIndex < 100 ? 1 : 0) : (currentIndex > 0 ? -1 : 0)
    }

    this.setState({
      currentVideoIndex: newIndex
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <VideoContainer video={this.state.videos[this.state.currentVideoIndex]} />
          <ButtonList onClick={this.onButtonClick.bind(this)} />
        </div>
      </div>
    )
  }
}
