import { useState } from "react";
import styles from './Techcard.module.css'
import PropTypes from "prop-types";

function Techcard(props) {
    const [selectedState, setSelectedState] = useState('');

    const colors = props.valcol === "1"
        ? ["rgba(6, 117, 172, 1)", "rgba(102, 150, 169, 0.8)"]
        : ["rgba(102, 150, 169, 0.8)", "rgba(6, 117, 172, 1)"];

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.left}
                style={{ backgroundColor: colors[0] }}
            >
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
            </div>
            <div
                className={styles.right}
                style={{ backgroundColor: colors[1] }}
            >

                <div className={`${styles.names} ${selectedState !== '' ? styles.selected : ''}`}>
                    {selectedState}
                </div>

                <div className={styles.langs}>
                    {props.langs.map((lang, index) => (
                        <div
                            key={index}
                            className={styles.lang}
                            onMouseEnter={() => setSelectedState(lang[1])}
                            onMouseLeave={() => setSelectedState(' ')}
                        >
                            <img className={styles.svg} src={lang[0]} alt="Language Icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Techcard;

Techcard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    langs: PropTypes.arrayOf(PropTypes.array).isRequired,
    valcol: PropTypes.string.isRequired,
};
