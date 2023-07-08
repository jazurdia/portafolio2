import styles from './Aboutme.module.css'
import { useState } from 'react'
import image from "../../assets/fotoale.jpg"
import { aboutmeSP } from "../../Text.js"
function Aboutme() {
    const [showinfo, setShowinfo] = useState(false)
    const [isImageLeft, setIsImageLeft] = useState(true)

    const handleClick = () => {
        setIsImageLeft(!isImageLeft)
        setTimeout(() => {
            setShowinfo(!showinfo)
        }, 500)
    }

    const imageClass = isImageLeft? styles.cimage : styles["cimage-reverse"]
    const textClass = isImageLeft? styles.ctext : styles["ctext-reverse"]

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={textClass}>

                {showinfo? (
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
