import Image from "next/image";
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
       <span className={styles.logo}>
          <Image src="/assets/logo-canasta-dark.png" alt="Canasta Logo" width={150} height={40} />
        </span>
   
    </footer>
  )
}

export default Footer;