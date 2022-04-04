import Image from 'next/image';
import styles from './findus.module.scss';

const BodyFindUs = () => {
    return (
        <div className={styles.content}>
            <div className={`${styles.content__title} title`}>Find Us On</div>
            <div className={`divider`}></div>
            <div className={styles.content__socials}>
              <Image id="BTN-FACEBOOK" src='/assets/telegram.png' alt='Canasta logo' objectFit="contain"  width={120} height={120} className={styles.img} />
              <Image id="BTN-FACEBOOK" src='/assets/twitter.png' alt='Canasta logo' objectFit="contain"  width={120} height={120} className={styles.img} />
              <Image id="BTN-FACEBOOK" src='/assets/discord.png' alt='Canasta logo' objectFit="contain"  width={120} height={120} className={styles.img} />
              <Image id="BTN-FACEBOOK" src='/assets/medium.png' alt='Canasta logo' objectFit="contain"  width={120} height={120} className={styles.img} />
            </div>
        </div>
    )
}

export default BodyFindUs;