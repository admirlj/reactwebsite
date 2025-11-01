import styles from "./Team.module.css";
import travel from "../../../../../assets/travel.png";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

export default function Team() {
  const containerRef = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 0.5,
    };

    let targetElement;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          targetElement = entry.target;

          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);

  return (
    <div className={styles.flex}>
      <div className={styles.content}>
        <div
          ref={containerRef}
          className={`${styles.maxWidth} ${styles.fadeAnimation} ${
            isActive ? styles.active : undefined
          }`}
        >
          <p>
            Think of the most groundbreaking and successful software solutions.
            They are innovative, reliable, and transformative.
          </p>
          <p>
            That's not by accident – technical excellence and visionary thinking
            are the cornerstones of our work at Brainit.
          </p>
          <p>
            We believe that every great project starts with a strong
            collaboration between people and technology, creating powerful and
            lasting impacts. Our expertise combines intuition and strategy,
            underpinned by rigorous research and cutting-edge technology.
          </p>

          <p>
            <Link to={"/about"}>meet the team meet the team</Link>
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={travel} alt="travel image" />
      </div>
    </div>
  );
}
