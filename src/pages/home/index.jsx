import Container from "../../components/Container";
import Section from "../../components/Section";
import styles from "./Home.module.css";
import circle from "../../assets/circle.png";
import five from '../../assets/500.png'

export default function Homepage() {
  return (
    <>
      <Section style={{ position: "sticky", top: "0px" }}>
        <Container>
          <div className={styles.hero}>
            <div className={styles.animateContainer}>
              <div className={styles.overflowHidden}>
                <h1>BUILD</h1>
              </div>
              <div className={styles.overflowHidden}>
                <h1>ITERATE</h1>
                <img className={styles.image} src={circle} alt="pen circle" />
              </div>
              <div className={styles.overflowHidden}>
                <h1>SUCCEED.</h1>
              </div>
            </div>
            <div className={styles.sideContent} >
              <p>
                A medtech product team that focuses on what is essential! Time management, controlling the scope, and commitment to deliver true value are what we are most proud of.
              </p>
              <p>Lets talk</p>
              <img className={styles.imageFive} src={five} alt="500 image" />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container style={{ height: "900px" }}>section two</Container>
      </Section>
    </>
  );
}
