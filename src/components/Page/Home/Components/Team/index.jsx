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
            Think of the most seamless and memorable journeys they’re
            comfortable, dependable, and effortless. That’s no coincidence
            precision, professionalism, and care are the foundation of our
            transfer service at Moj Kodeks.
          </p>
          <p>
            We believe that exceptional travel begins with genuine hospitality
            and smart logistics. Every detail from the first booking to the
            final destination is handled with care, ensuring you arrive relaxed,
            refreshed, and right on time.
          </p>
          <p>
            With experienced drivers, a premium fleet, and a dedication to
            personalized service, Moj Kodeks connects airports, cities, and
            experiences across Croatia, Italy, and beyond. Whether you’re
            catching a flight, attending a meeting, or discovering new places,
            we make every journey as effortless as it is elegant.
          </p>
          <p>
            Driven by reliability and defined by comfort, Moj Kodeks transforms
            transfers into experiences worth remembering.
          </p>

          {/* <p>
            <Link to={"/about"}>meet the team meet the team</Link>
          </p> */}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={travel} alt="travel image" />
      </div>
    </div>
  );
}
