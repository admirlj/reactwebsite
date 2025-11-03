import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navigation.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const targetPath = useRef(undefined);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = () => setIsOpen((prev) => !prev);

  const handleNavigation = (path) => {
    targetPath.current = path;
    navigate(path);
  };

  // Close modal when new path is loaded
  useEffect(() => {
    if (location.pathname === targetPath.current) {
      setIsOpen(false);
    }
  }, [location, targetPath]);

  return (
    <div className={styles.navigation}>
      <nav>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="main logo" />
        </Link>

        <div onClick={handleMenu} className={styles.hamburger}>
          <span className={isOpen ? styles.close : ""}></span>
          <span className={isOpen ? styles.close : ""}></span>
        </div>

        <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <div className={styles.menuContent}>
            <div className={styles.menuItem}>
              <div className={styles.hoverElement}></div>
              <button onClick={() => handleNavigation("/")}>Home</button>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.hoverElement}></div>
              <button onClick={() => handleNavigation("/about")}>About</button>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.hoverElement}></div>
              <button onClick={() => handleNavigation("/projects")}>
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
