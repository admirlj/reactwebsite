import React from "react";
import styles from "./Software.module.css";
import document from "../../../../../assets/document.png";
import pen from "../../../../../assets/pen.png";
import paper from "../../../../../assets/paper.png";
import { Link } from "react-router";

function Software() {
  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <h2>Creating impactful medtech software</h2>
        <Link to={'/'} className={styles.button}>Working at Company</Link>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={document} alt="icon 1" />
          </div>
          <h3>Analysis & Strategy</h3>
          <p>
            We begin by getting to know your business challenges. We want to
            know everything!
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={pen} alt="icon 1" />
          </div>
          <h3>Design & Prototyp</h3>
          <p>
            Mockups AND usability tests are first "techical" part, You’ll see
            what we’ll build before we start.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={paper} alt="icon 1" />
          </div>
          <h3>Engineer & Develop</h3>
          <p>
            React, angular, spring boot, .net, FHIR, hl7, his integrations. we
            will do anything to achieve the roadmap.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Software;
