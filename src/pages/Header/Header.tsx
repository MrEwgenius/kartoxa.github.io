import React from 'react';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <div
            className={styles.header}
        >
            <div className={styles.headerText}  >
                Сколько мешков картошки стоишь ты?
            </div>
        </div>
    );
}

export default Header;