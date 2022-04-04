import Image from 'next/image';
import styles from './computers.module.scss';

const BodyComputers = () => {
    return (
        <div className={styles.content}>
            <Image id="BTN-FACEBOOK" src='/assets/img-computers.png' alt='Canasta logo' objectFit="contain"  width={700} height={300} className={styles.img} />
        </div>
    )
}

export default BodyComputers;