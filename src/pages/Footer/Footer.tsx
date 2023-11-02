import React from 'react';

import styles from './Footer.module.scss'


const Footer = () => {
    return (
        <div
            className={styles.containerFooter}
        >
            <div
                className={styles.containerWrapper}
                >
                <div>Политика конфиденциальности</div>
                <div className={styles.link}><a target='blank' href="https://www.instagram.com/mr.ewgenius/">Контакты</a></div>
            </div>
        </div>
    );
}

export default Footer;