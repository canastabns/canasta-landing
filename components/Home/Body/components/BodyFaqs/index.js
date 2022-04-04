import Image from 'next/image';
import { useState } from 'react';
import styles from './faq.module.scss';
import faqs from './faq.json';
import FAQ from './Faq';

const BodyFaqs = () => {
    return (
        <div className={styles.content}>
            <h3>FAQ</h3>
            {
                faqs.map((faq, key) => {
                    return <FAQ key={key} idtag={`FAQ-${key}`} title={faq.title} description={faq.description} />
                })
            }

        </div>
    )
}

export default BodyFaqs;