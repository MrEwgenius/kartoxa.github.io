import React from 'react';
import styles from './Results.module.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostSelectors } from '../../redux/reducers/formSlice';
import CountUp from 'react-countup';



const Results = () => {

    const navigate = useNavigate()
    const onTitleClick = () => {
        navigate(`'/'`)

    }

    const potatoSacks = useSelector(PostSelectors.getRandomPostsList);


    return (
        <div className={styles.containerResults}>
            <div className={styles.textContent}>
                <h2 className={styles.title}>Ты оцениваешься в
                    <span>
                        <CountUp
                            start={0}
                            end=
                            {potatoSacks}
                        />
                    </span>
                </h2>
                <p className={styles.subTitle}>Мешков(-а) картошки</p>
            </div>
            <button onClick={onTitleClick} className={styles.button}>РАССЧИТАТЬ ЕЩЁ РАЗ?</button>
        </div >
    );
}

export default Results;