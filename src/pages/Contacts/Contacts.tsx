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

                <div className={styles.groupContacts}><span>Instagram:</span>
                    <div>
                        <a
                            target='blank'
                            href='https://www.instagram.com/mr.ewgenius/'
                        >
                            Mr.Ewgenius
                        </a>
                    </div>
                </div>

                <div className={styles.groupContacts}>
                    <span>Email:</span>
                    <div>
                        <a
                            href='#'
                        >
                            ebolynskii@mail.ru
                        </a>
                    </div>
                </div>

                <div className={styles.groupContacts}>
                    <span>GitHub:</span>
                    <div>
                        <a
                            target='blank'
                            href='https://github.com/MrEwgenius'
                        >
                            MrEwgenius
                        </a>
                    </div>

                </div>

                <div className={styles.groupContacts}>
                    <span>tg:</span>
                    @Badiiis
                </div>
                <button onClick={ClickOnHome} className={styles.buttonHome}>Вернуться к калькулятору</button>


            </div>
        </div>
    );
}

export default Contacts;