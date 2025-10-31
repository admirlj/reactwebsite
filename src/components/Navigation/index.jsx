import logo from '../../assets/logo.png'
import styles from './Navigation.module.css';
import { Link } from 'react-router';

export default function Navigation() {

  return (
    <div className={styles.navigation}>
        <nav>
            <Link to='/'>
                <img className={styles.logo} src={logo} alt='main logo' />
            </Link>

            <div className={styles.hamburger}>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
  )
}
