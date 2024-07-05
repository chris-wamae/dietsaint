import Link from "next/link";
import styles from "./navbar.module.css"

export default function NavBar({navLinks} : {navLinks: string[]}) {
   return <div className={styles.navbar}>
        {
            navLinks.map(link => {
                return <Link className={styles.nav_element} key={link} href={link}>Contact</Link>
            })
        }
    </div>
}