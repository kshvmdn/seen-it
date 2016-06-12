import React, { PropTypes as T } from 'react'

import styles from './styles.module.css'

export class Container extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (<div></div>)
  }
}

Container.contextTypes = {
  router: T.object
}
