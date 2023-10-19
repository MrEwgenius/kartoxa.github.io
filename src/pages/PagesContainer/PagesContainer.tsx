import React from 'react';
import Header from '../Header/Header';
import styles from './PagesContainer.module.scss'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const PagesContainer = () => {
    return (
        <div className={styles.containerPagesContainer}>
            <Header />
            <div className={styles.outlet}>
                <Outlet />

            </div>
            <div
                className={styles.footer}
            >
                <Footer />
            </div>
        </div>
    );
}

export default PagesContainer;