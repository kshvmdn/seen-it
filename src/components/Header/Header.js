import React from 'react'
import { Link } from 'react-router'

import styles from './styles.module.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <a href='http://reddit.com' title="Reddit"><img className={styles.snoo} src='assets/images/snoo.png' /></a>
        <Link className={styles.logo} to='/'><h1>SEEN IT</h1></Link>
        <section>for <a href='http://reddit.com' title="Reddit">reddit</a>.</section>
      </div>
    )
  }
}
