import React from 'react'
import styles from './Container.module.css';

function Container({children, style = {}}) {
  return (
    <div style={style} className={styles.container}>
        {children}
    </div>
  )
}

export default Container