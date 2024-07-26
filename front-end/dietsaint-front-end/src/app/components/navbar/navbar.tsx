import Link from "next/link";
import styles from "./navbar.module.css"
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({weight:"400",subsets: ["latin"], display:"swap"});

export default function NavBar({leftNavLinks,rightNavLinks} : {leftNavLinks: string[], rightNavLinks: string[]}) {

   return <div className={styles.navbar}>
    <div className={styles.nav_container}>
        <div className={styles.links_div}>
          {
            rightNavLinks.map(link => {
                return <Link className={styles.nav_element} key={link} href={link.toLowerCase()}>{link}</Link>
            }) 
          }
        </div>
        <div className={styles.nav_branding}>
            <div className={pacifico.className}><span className={styles.app_name}>Food Adder</span></div>
            <div className={pacifico.className}><span className={styles.app_description}>Calculate nutrient content in your food</span></div>
        </div>
        <div className={styles.links_div}>
        {   
            leftNavLinks.map(link => {
                return <Link className={styles.nav_element} key={link} href={link.toLocaleLowerCase()}>{link}</Link>
            })
        }
        </div>
         
    </div>
    </div>
}