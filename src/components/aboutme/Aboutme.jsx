// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styles from './Aboutme.module.css'
import image from "../../assets/fotoale.jpg"
import { aboutmeSP } from "../../Text.js"

function Aboutme() {
    const [showinfo, setShowinfo] = useState(false)
    const [isImageLeft, setIsImageLeft] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageLeft(prevIsImageLeft => !prevIsImageLeft);
            setTimeout(() => {
                setShowinfo(prevShowinfo => !prevShowinfo);
            }, 500)
        }, 5000);
        return () => clearInterval(interval);  // Esto es para limpiar el intervalo si el componente se desmonta antes de que se complete el tiempo
    }, []);

    const imageClass = isImageLeft ? styles.cimage : styles["cimage-reverse"]
    const textClass = isImageLeft ? styles.ctext : styles["ctext-reverse"]

    return (
        <div className={styles.container}>
            <div className={textClass}>

                {showinfo ? (
                    <p className={styles.text}>{aboutmeSP.info}</p>
                ) : (
                    <h1 className={styles.title}> {aboutmeSP.name} </h1>
                )}

            </div>
            <div className={imageClass}>
                <img className={styles.img} src={image} alt="me" />
            </div>
        </div>
    )
}

export default Aboutme;
