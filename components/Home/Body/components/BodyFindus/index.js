import Image from 'next/image';
import Link from 'next/link';
import styles from './findus.module.scss';

const BodyFindUs = () => {

    const baseUrl = {
        telegram: 'https://t.me/canastaofficial',
        discord: 'https://discord.gg/X5HGFr5Cuf',
        twitter: 'https://twitter.com/CanastaDomains',
        docs: 'https://docs.canasta.domains',
        medium: 'https://blog.canasta.domains/',
    }

    const clickToUrl = (type) => {
        window.open(
            baseUrl[type],
            '_blank' 
          );
    }
    return (
        <div className={styles.content}>
            <div className={`${styles.content__title} title`}>Find Us On</div>
            <div className={`divider`}></div>
            <div className={styles.content__socials}>           
              <Image onClick={()=>clickToUrl('telegram')} id="BTN-TELEGRAM" src='/assets/telegram.png' title='Telegram Canasta Domain' alt='Telegram Canasta Domain' objectFit="contain"  width={120} height={120} className={styles.img} />
              <Image onClick={()=>clickToUrl('twitter')} id="BTN-TWITTER" src='/assets/twitter.png' title='Twitter Canasta Domain' alt='Twitter Canasta Domain' objectFit="contain"  width={120} height={120} className={styles.img} />
              <Image onClick={()=>clickToUrl('discord')} id="BTN-DISCORD" src='/assets/discord.png'  title='Discord Canasta Domain' alt='Discord Canasta Domain' objectFit="contain"  width={120} height={120} className={styles.img} />
              <Image onClick={()=>clickToUrl('medium')} id="BTN-MEDIUM" src='/assets/medium.png' title='Medium Canasta Domain' alt='Medium Canasta Domain' objectFit="contain"  width={120} height={120} className={styles.img} />
            </div>
        </div>
    )
}

export default BodyFindUs;