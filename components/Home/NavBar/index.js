import Image from 'next/image';
import { tagEvent } from '../../../lib/googleTag';
import styles from './navbar.module.scss'


const Navbar = () => {
  const navigate = ()=> {
    tagEvent({
      action: "CTA-MENU",
      params : ""
    })
    document.location.href = 'https://app.canasta.domains';
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__logo}>
          <Image src='/assets/canasta-logo.svg' alt='Canasta logo' width={250} height={'100%'} />
        </div>
      
        <div className={styles.navbar__cta}>
            <div id='BTN-MENU' onClick={()=>navigate()} className={styles.button}>Launch App</div>
        </div>
      </div>
    </div>
  );
}


export default Navbar;