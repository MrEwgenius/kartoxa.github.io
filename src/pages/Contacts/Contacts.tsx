import React from 'react';
import styles from './Contacts.module.scss'
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    const navigate = useNavigate()

    const ClickOnHome = () => {
        navigate('/home')
    }
    return (
        <div className={styles.containerContacts}>


            <div className={styles.containerWrapper}>

                <div className={styles.groupContacts}>nstagram: 
                    <a
                        target='blank'
                        href='https://www.instagram.com/mr.ewgenius/'
                    >
                        https://www.instagram.com/mr.ewgenius/
                    </a>
                </div>

                <div className={styles.groupContacts}>Email:
                    <a
                        href='#'
                    >
                        ebolynskii@mail.ru
                    </a>
                </div>

                <div className={styles.groupContacts}>Email:
                    <a
                        target='blank'
                        href='https://github.com/MrEwgenius'
                    >
                        https://github.com/MrEwgenius
                    </a>

                </div>

                <div className={styles.groupContacts}>tg: @Badiiis</div>
                <button onClick={ClickOnHome} className={styles.buttonHome}>Вернуться к калькулятору</button>


            </div>
        </div>
    );
}

export default Contacts;