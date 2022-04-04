import Image from 'next/image';
import styles from './description.module.scss';

const BodyDescriptionCenterBox = () => {
    return (
        <div className={styles.content}>

           
            <h3 className='title'>Participate in the DAO </h3>
            <div className='divider center '/>

            <div className={styles.content__box}>
                <div className={'mb-4'}>
                    <Image 
                        src='/assets/icon-comunity.png' 
                        alt='Canasta logo' 
                        width={80} 
                        height={70} 
                        className={styles.socials__icon} 
                    />
                </div>
            <div className={`${styles.content__text} text_description color-black`}>
                Canasta.domains is the DAO from the get go. With the @CNST token you can participate in 
                governance decisions, allocate treasury funds, and if staked, you receive the corresponding 
                percentage of all domains purchased in the protocol. Learn more here!
            </div>
            </div>

            <div className={styles.rombo} />
        </div>
    )
}

export default BodyDescriptionCenterBox;