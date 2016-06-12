import React from 'react'
import { Link } from 'react-router'

import styles from './styles.module.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link className={styles.logo} to='/'><h1>SEEN IT</h1></Link>
        <section>for Reddit</section>
      </div>
    )
  }
}
