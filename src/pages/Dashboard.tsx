import React from 'react';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
    const cards = [
        { status: 'Running', numbers: 20 },
        { status: 'Delayed', numbers: 30 },
        { status: 'Cancelled', numbers: 60 },
        { status: 'Closed', numbers: 60 }
    ];

    return (
        <div id="dashboard" className={styles.dashboard}>
            <div className={styles.statusCardContainer}>
                {cards.map((item, index) => (
                    <div key={index} className={styles.statusCard}>
                        <span className={styles.statusCardTitle}>{item.status}</span>
                        <span className={styles.statusCardNumber}>{item.numbers}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
