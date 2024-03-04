// Events.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Events.module.css';

const Events = () => {
    const [width1, setWidth] = useState(0);
    const [height1, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.rectangle}></div>
            <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/Campus.jpg"
                        alt="Campus Ambassador Tiger"
                        layout="responsive"
                        width={50}
                        height={50}
                    />
                </div>
                <div className={styles.imageContainer} style={{ marginTop: '5%' }}>
                    <Image
                        src="/Events.jpg"
                        alt="Events Tiger"
                        layout="responsive"
                        width={50} /* Adjust the width of the image */
                        height={50} /* Adjust the height of the image */
                    />
                </div>
            </div>
        </div>
    );
}

export default Events;
