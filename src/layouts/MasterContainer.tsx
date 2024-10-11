import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sidebar } from '../components';
import ContentBlock from './ContentBlock';
import styles from '../styles/masterContainer.module.css';

const MasterContainer = () => {
  // Create a ref for the container to animate
  const masterPageRef = useRef(null);

  useEffect(() => {
    // Use GSAP to animate the opacity and transform of the component
    gsap.fromTo(
      masterPageRef.current,
      { opacity: 0, y: -50 }, // Start from non-visible and slightly up
      { opacity: 1, y: 0, duration: 1 } // Animate to fully visible and original position
    );
  }, []);

  return (
    <div className={styles.masterContainer} ref={masterPageRef}>
      <Sidebar />
      <ContentBlock />
    </div>
  );
};

export default MasterContainer;
