import Image from 'next/image';
import styles from './description.module.scss';

const BodyDescriptionCenter = () => {
    return (
        <div className={styles.content}>
            <h3 className='title'>Are you a community partner? </h3>
            <div className='divider center '/>
            <div className={`${styles.content__text} text_description color-secundary`}>
            We’re looking for wallets, exchanges and partners that want to adapt the .bnb domain natively. Please contact us at partners@canasta.domains
            </div>
        </div>
    )
}

export default BodyDescriptionCenter;