import React from 'react';
import { Outlet } from 'react-router-dom';
import { headerBg, logo } from '../constants/images';
import { useAppSelector } from '../hooks';
import { BackButton } from '../components';
import { gsap } from 'gsap';
import styles from '../styles/contentBlock.module.css'; 

const ContentBlock = () => {
    const pageName = useAppSelector(state => state.pageName.pageName);
    const outletRef = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(outletRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 }
        );

        return () => {
            gsap.to(outletRef.current, { opacity: 0, y: -20, duration: 0.5 }); // Exit animation
        };
    }, [pageName]);

    return (
        <div id='contentBlock' className={styles.contentBlock}>
            <img src={headerBg} className={`${styles.headerBg} header-logo`} alt="Header Background" />
            <h1 ref={outletRef} className={styles.title}>
                <BackButton />
                {pageName}
            </h1>
            <img src={logo} alt='logo' className={styles.logo} />

            <div className={styles.outlet} ref={outletRef}>
                <Outlet />
            </div>
        </div>
    );
}

export default ContentBlock;
