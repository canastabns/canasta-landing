import Image from 'next/image';
import styles from './description.module.scss';

const BodyDescriptionSocials = () => {
    return (
        <div className={styles.content}>
            <div className={styles.content__box}>
                <div className={styles.box__item}>
                    <div className={styles.item}>
                        <div className={styles.item__icon}>
                            <Image 
                            src='/assets/icon-email.png' 
                            alt='Canasta logo' 
                            width={40} 
                            height={30} 
                            className={styles.socials__icon} 
                        />
                        </div>
                        <div className={styles.item__divider} />
                        <div className={styles.item__text}>Subscribe to our newsletter</div>
                     </div>
                     <div className={styles.box__button}>Subscribe</div>
                </div>

                {/* DISCORD  */}
                <div className={styles.box__item}>
                    <div className={styles.item}>
                        <div className={styles.item__icon}>
                            <Image 
                            src='/assets/icon-comm.png' 
                            alt='Canasta logo' 
                            width={40} 
                            height={30} 
                            className={styles.socials__icon} 
                        />
                        </div>
                        <div className={styles.item__divider} />
                        <div className={styles.item__text}>Join our Discord community</div>
                     </div>
                     <div className={styles.box__button}>Join</div>
                </div>
                {/* END DISCORD */}


                {/* forum */}
                <div className={styles.box__item}>
                    <div className={styles.item}>
                        <div className={styles.item__icon}>
                            <Image 
                            src='/assets/icon-chat.png' 
                            alt='Canasta logo' 
                            width={30} 
                            height={30} 
                            className={styles.socials__icon} 
                        />
                        </div>
                        <div className={styles.item__divider} />
                        <div className={styles.item__text}>Join the forum</div>
                     </div>
                     <div className={styles.box__button}>Join</div>
                </div>
                 {/* forum */}

                  {/* forum */}
                <div className={styles.box__item}>
                    <div className={styles.item}>
                        <div className={styles.item__icon}>
                            <Image 
                            src='/assets/icon-docu.png' 
                            alt='Canasta logo' 
                            width={30} 
                            height={40} 
                            className={styles.socials__icon} 
                        />
                        </div>
                        <div className={styles.item__divider} />
                        <div className={styles.item__text}>Read our docs</div>
                     </div>
                     <div className={styles.box__button}>Read</div>
                </div>
                 {/* forum */}
            </div>

        </div>
    )
}

export default BodyDescriptionSocials;