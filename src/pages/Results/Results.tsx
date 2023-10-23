import React from 'react';
import styles from './Results.module.scss'
import { useNavigate } from 'react-router-dom';

const Results = () => {

    const navigate = useNavigate()
    const onTitleClick = () => {
        navigate(`'/'`)

    }
    return (
        <div className={styles.containerResults}>
            <div className={styles.textContent}>
                <h2 className={styles.title}>Ты оцениваешься в <span>70</span> </h2>
                <p className={styles.subTitle}>Мешков(-а) картошки</p>
            </div>
            <button onClick={onTitleClick} className={styles.button}>РАССЧИТАТЬ ЕЩЁ РАЗ?</button>
        </div>
    );
}

export default Results;