import React from 'react'
import styles from './Container.module.css';

function Container({ children, style = {}, ...rest }) {
  return (
    <div {...rest} style={style} className={styles.container}>
      {children}
    </div>
  );
}

export default Container