import Image from 'next/image';
import styles from './description.module.scss';

const BodyDescription = () => {
    return (
        <div className={styles.content}>

            <div className={styles.content__box}>
                <div className={styles.content__image}>
                    <Image src='/assets/img-notebook.png' alt='Canasta logo' width={600} height={400}
                           className={styles.socials__icon}/>

                </div>
                <div className={styles.content__text}>
                    <div className={`title`}>A community project!</div>

                    <div className={`divider left`}></div>
                    <div className={'text_description color-secundary'}>
                        Canasta.domains is a community project built by a group of people that love the BuildAndBuild
                        (BNB) ecosystem and the work that Binance&trade; is doing to expand it. We wanted to help. We
                        have no affiliation to Binance&trade; the
                        company or any of its subsidiaries or parent companies.
                    </div>
                </div>

            </div>


        </div>
    )
}

export default BodyDescription;