import React from 'react'
import styles from './Section.module.css';

function Section({ children, style = {}, noPadding, ...rest }) {

  const inlineStyle = {
    ...style,
    ...(noPadding ? { padding: '0px' } : {})
  }
  return (
    <section {...rest} style={inlineStyle} className={styles.section}>
      {children}
    </section>
  );
}

export default Section