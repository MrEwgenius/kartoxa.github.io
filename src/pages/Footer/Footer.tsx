import React from 'react';

import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate()

    const onClickContacts = () => {
        navigate('/contacts')

    }
    return (
        <div
            className={styles.containerFooter}
        >
            <div
                className={styles.containerWrapper}
            >
                <div>Политика конфиденциальности</div>
                <div className={styles.link}>
                    <a
                        onClick={onClickContacts}
                    // target='blank'
                    // href="https://www.instagram.com/mr.ewgenius/"
                    >
                        Контакты
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;