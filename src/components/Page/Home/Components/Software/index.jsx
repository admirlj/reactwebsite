import React, { useEffect, useRef, useState } from "react";
import styles from "./Software.module.css";
import price from "../../../../../assets/best-price.png";
import time from "../../../../../assets/waiting-time.png";
import professionalism from "../../../../../assets/professionalism.png";
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
        <h2>Reliable taxi & transfer service in Croatia</h2>
        <Link to={"/"} className={styles.button}>
          Book now
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
            <img src={price} alt="icon 1" />
          </div>
          <h3>Best Price Guarantee</h3>
          <p>
            Transparent pricing and exceptional service every time you travel.
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
            <img src={time} alt="icon 1" />
          </div>
          <h3>Waiting Time</h3>
          <p>
            Your driver waits for you flights, meetings, or tours with flexible
            time allowances and no stress.
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
            <img src={professionalism} alt="icon 1" />
          </div>
          <h3>Professionalism</h3>
          <p>
            Professionalism You Can Trust, making every trip smooth and
            enjoyable from airport to destination.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Software;
