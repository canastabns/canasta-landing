import Image from 'next/image';
import { useState } from 'react';
import styles from './faq.module.scss';

const FAQ = ({ title, description, idtag }) => {
    const [show, setShow] = useState(true);
    const showDescription = () => {
        setShow(!show)
    }
    return (
        <div id={idtag} className={styles.faqs}>
            <div className={styles.faqs__title} onClick={showDescription}>

                {title}

                <div className={styles.caret}>
                    {show
                        ? <Image alt={'down'} src={'/assets/caret-down.png'} width={30} height={30} />
                        : <Image alt={'down'} src={'/assets/caret-up.png'} width={30} height={30} />
                    }
                </div>
            </div>
            <div className={`${show ? styles.showme : ''} ${styles.faqs__description}`}>
                <div className={styles.faqs__text}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default FAQ;