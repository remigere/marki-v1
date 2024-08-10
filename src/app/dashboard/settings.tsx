import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faGear, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import Layout from './layout';

const Index: React.FC = () => {
    return (
        <>
            <h1 className={styles.title}>Welcome to your dashboard</h1>
            <p className={styles.description}>Here you can find all the information about your protocol and billing history.</p>
        </>
    );
}

export default Index;