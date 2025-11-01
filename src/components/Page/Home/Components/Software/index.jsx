import React, { useEffect, useRef, useState } from "react";
import styles from "./Software.module.css";
import document from "../../../../../assets/document.png";
import pen from "../../../../../assets/pen.png";
import paper from "../../../../../assets/paper.png";
import { Link } from "react-router";

function Software() {
  const refs = useRef([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.id);

          setCards((prev) => (prev.includes(id) ? prev : [...prev, id]));

          observer.unobserve(entry.target);
        }
      });
    }, options);

    refs.current.forEach((el) => observer.observe(el));
  }, [cards]);

  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <h2>Creating impactful medtech software</h2>
        <Link to={"/"} className={styles.button}>
          Working at Company
        </Link>
      </div>
      <div className={styles.cards}>
        <div
          ref={(el) => (refs.current[0] = el)}
          id="0"
          className={`${styles.card} ${
            cards.includes(0) ? styles.active : ""
          } `}
        >
          <div className={styles.imageContainer}>
            <img src={document} alt="icon 1" />
          </div>
          <h3>Analysis & Strategy</h3>
          <p>
            We begin by getting to know your business challenges. We want to
            know everything!
          </p>
        </div>

        <div
          id="1"
          ref={(el) => (refs.current[1] = el)}
          className={`${styles.card} ${
            cards.includes(1) ? styles.active : ""
          } `}
        >
          <div className={styles.imageContainer}>
            <img src={pen} alt="icon 1" />
          </div>
          <h3>Design & Prototyp</h3>
          <p>
            Mockups AND usability tests are first "techical" part, You’ll see
            what we’ll build before we start.
          </p>
        </div>

        <div
          id="2"
          ref={(el) => (refs.current[2] = el)}
          className={`${styles.card} ${
            cards.includes(2) ? styles.active : ""
          } `}
        >
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
