import Container from "../../components/Container";
import Section from "../../components/Section";
import styles from "./Home.module.css";
import circle from "../../assets/circle.png";

import Team from "../../components/Page/Home/Components/Team";
import Software from "../../components/Page/Home/Components/Software";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function Homepage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <Section
        id={"hero"}
        style={{ position: isTabletOrMobile ? "static" : "sticky", top: "0px" }}
      >
        <Container>
          <div className={styles.hero}>
            <div className={styles.animateContainer}>
              <div className={styles.overflowHidden}>
                <h1>Premium</h1>
              </div>
              <div className={styles.overflowHidden}>
                <h1>Transfer</h1>
                <img className={styles.image} src={circle} alt="pen circle" />
              </div>
              <div className={styles.overflowHidden}>
                <h1>Experience.</h1>
              </div>
            </div>
            <div className={styles.sideContent}>
              <p>
                From airport pickups to day trips, experience the difference of
                tailored transportation professional, punctual, and effortless.
              </p>
              <Link to={"/"} className={styles.button}>
                Book Now
              </Link>
              {/* <p>Book Your Transfer</p> */}
              {/* <img className={styles.imageFive} src={five} alt="500 image" /> */}
            </div>
          </div>
        </Container>
      </Section>
      <Section
        style={{
          backgroundColor: "var(--black-3)",
        }}
        noPadding
      >
        <Team />
      </Section>
      <Section>
        <Container>
          <Software />
        </Container>
      </Section>
    </>
  );
}
