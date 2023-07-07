import { useState } from "react";
import styles from './Techcard.module.css'
import PropTypes from "prop-types";

function Techcard(props) {
    const [selectedState, setSelectedState] = useState('');

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.names}>{selectedState}</div>
                <div className={styles.langs}>
                    {props.langs.map((lang, index) => (
                        <div
                            key={index}
                            className={styles.lang}
                            onMouseEnter={() => setSelectedState(lang[1])}
                            onMouseLeave={() => setSelectedState('')}
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
