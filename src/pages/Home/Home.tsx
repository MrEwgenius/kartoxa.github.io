import * as React from 'react';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.containerHome}>
            <div className={styles.containerWrapper}>
                <div className={styles.containerHuman}>
                    <img src="https://kamelrechner.eu/img/select-woman.png" alt="" />
                    <div className={styles.text}>Сколько картохи ты стоишь?</div>
                </div>
                <div className={styles.containerHuman}>
                    <img src="https://kamelrechner.eu/img/select-man.png" alt="" />
                    <div className={styles.text}>Сколько картохи ты стоишь?</div>
                </div>

            </div>
        </div>
    );
}

export default Home;