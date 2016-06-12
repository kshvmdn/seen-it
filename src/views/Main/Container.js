import React from 'react'

import Header from 'components/Header/Header'
import VideoContainer from 'components/Video/VideoContainer'
import ButtonList from 'components/ButtonList/ButtonList'

import styles from './styles.module.css'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <VideoContainer />
          <ButtonList />
        </div>
      </div>
    )
  }
}
