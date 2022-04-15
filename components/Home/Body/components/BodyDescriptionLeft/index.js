import Image from 'next/image';
import styles from './description.module.scss';

const BodyDescription = () => {
    return (
        <div className={styles.content}>
         
            <div className={styles.content__box}>
                <div className={styles.content__text}>
                   <div className={`title`}>
                       Your .bnb domain is an easy way to interact with the expanding Binance ecosystem.
                   </div>

                   <div className={`divider right`}></div>
                   <div className={'text_description color-secundary'}>Instead of remembering long strings, get your personalized name and save it for posterity. 
                       As we add new partners and communities, your .bnb domain will allow you to interact with the entire ecosystem.
                    </div>
                </div>
                <div className={styles.content__image}>
                    <Image src='/assets/img-coins.png' alt='Canasta logo' width={650} height={430} className={styles.socials__icon} />

                </div>
            </div>


        </div>
    )
}

export default BodyDescription;