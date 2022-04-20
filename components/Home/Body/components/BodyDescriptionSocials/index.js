import Image from 'next/image';
import styles from './description.module.scss';

const BodyDescriptionSocials = () => {
    const baseUrl = {
        telegram: 'https://t.me/canastaofficial',
        discord: 'https://discord.gg/X5HGFr5Cuf',
        twitter: 'https://twitter.com/CanastaDomains',
        docs: 'https://docs.canasta.domains',
        medium: 'https://blog.canasta.domains/',
        newsLetter: 'https://73d55ad5.sibforms.com/serve/MUIEADElBi70PdRJGciMeR29tankNPUKeWghnDk9r6_cBLknTpj4OgG-zFIvZwVUJr36O6nRcz9d5gEVXKYKr-rZrmimaZ3MHkjwug-BrsDu68WN-BmtW7S188jdCqK_uKS5cGz4pB7ml4PxbzQp7BjebXHePhUQ4pbMwDjx8dC8Iw7P5q8afy08q10pWepZb7JbzeGUlXzXjcSi',
    }

    const clickToUrl = (type) => {
        window.open(
            baseUrl[type],
            '_blank' 
          );
    }
    return (
        <div className={styles.content}>
            <div className={styles.content__box}>
                <div className={styles.box__item} onClick={()=>clickToUrl('newsLetter')}>
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
                <div className={styles.box__item} onClick={()=>clickToUrl('discord')}>
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
                <div className={styles.box__item} onClick={()=>clickToUrl('medium')}>
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
                <div className={styles.box__item} onClick={()=>clickToUrl('docs')}>
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