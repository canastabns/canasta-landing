import styles from './description.module.scss';

const BodyDescriptionCenter = () => {
    return (
        <div className={styles.content}>
            <h3 className='title'>Are you a community partner? </h3>
            <div className='divider center '/>
            <div className={`${styles.content__text} text_description color-secundary`}>
                We’re looking for wallets, exchanges and other partners that may want to adopt the .bnb domain natively.
                (isn’t ‘natively’ a term that you would use to describe something that interacts with the domain name
                directly on.a technical level, like a browser? Not sure I get this). Please
                contact us at <a href={"mailto:partners@canasta.domains"}>partners@canasta.domains</a>
            </div>
        </div>
    )
}

export default BodyDescriptionCenter;