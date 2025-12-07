import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import clutch from "../../assets/clutch.png";
import five from "../../assets/500.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        <div className={styles.left}>
          <div>
            <img className={styles.logo} src={logo} alt="logo image" />
            {/* <img className={styles.five} src={five} alt="five image" />
            <img className={styles.clutch} src={clutch} alt="clutch image" /> */}
          </div>
          <div>
            <p>
              THE GOLDEN MIDDLE BETWEEN PRODUCT DEVELOPMENT & TEAM AUGMENTATION.
              BRAINIT IS ONE OF THE FASTEST-GROWING SOFTWARE AGENCIES, BASED IN
              CROATIA (GMT+2 TIMEZONE).
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div>
            <h3>Navigation</h3>
            <ul>
              <li>
                {" "}
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/"}>About</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/"}>Projects</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/"}>Working at company</Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                {" "}
                <Link to={"/"}>Privacy policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/"}>Contact</Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li>
                {" "}
                <Link to={"/"}>Logo </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/"}>Logo</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
