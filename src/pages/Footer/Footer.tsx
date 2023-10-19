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
                Политика конфиденциальности
            </div>
        </div>
    );
}

export default Footer;