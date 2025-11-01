import styles from "./Team.module.css";
import travel from '../../../../../assets/travel.png'
import { Link } from "react-router";

export default function Team() {
  return (
    <div className={styles.flex}>
      <div className={styles.content}>
        <div className={styles.maxWidth}>
        <p>
          Think of the most groundbreaking and successful software solutions.
          They are innovative, reliable, and transformative.
        </p>
        <p>
          That's not by accident – technical excellence and visionary thinking
          are the cornerstones of our work at Brainit.
        </p>
        <p>
          We believe that every great project starts with a strong collaboration
          between people and technology, creating powerful and lasting impacts.
          Our expertise combines intuition and strategy, underpinned by rigorous
          research and cutting-edge technology.
        </p>

        <p>
          <Link to={"/about"} >meet the team meet the team</Link>
        </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
         <img src={travel} alt="travel image" />
      </div>
    </div>
  );
}
