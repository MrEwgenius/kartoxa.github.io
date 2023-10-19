import * as React from 'react';
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    const onClickOnWomen = () => {
        navigate('/women')

    }
    const onClickOnMen = () => {
        navigate('/men')

    }
    return (
        <div className={styles.containerHome}>
            <div className={styles.containerWrapper}>
                <div
                    onClick={onClickOnWomen}
                    className={styles.containerHuman}>
                    <img src="https://kamelrechner.eu/img/select-woman.png" alt="" />
                    <div className={styles.text}>Сколько картохи ты стоишь?</div>
                </div>
                <div
                    onClick={onClickOnMen }
                    className={styles.containerHuman}>
                    <img src="https://kamelrechner.eu/img/select-man.png" alt="" />
                    <div className={styles.text}>Сколько картохи ты стоишь?</div>
                </div>

            </div>
        </div>
    );
}

export default Home;