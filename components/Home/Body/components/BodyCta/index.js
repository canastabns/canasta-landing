import styles from './cta.module.scss';

const BodyCta = () => {
    const navigate = ()=> {
        document.location.href = 'https://app.canasta.domains';
      }
    return (
        <div className={styles.content}>
            
            <div className={styles.content__text}>
                <h1>Welcome to Canasta</h1>
                <h2>
                    A decentralized naming solution for the <span className="color-secundary">BNB</span> ecosystem.
                </h2>
                <div className={styles.button__cta}>
                    <div onClick={()=>navigate()} id="BTN-CTA" className={styles.button}>GET YOUR BNB DOMAIN</div>
                </div>
            </div>
           

        </div>
    )
}

export default BodyCta;