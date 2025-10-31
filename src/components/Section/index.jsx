import React from 'react'
import styles from './Section.module.css';

function Section({ children, style = {} }) {
  return (
    <section style={style} className={styles.section}>
      {children}
    </section>
  );
}

export default Section