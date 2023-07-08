import styles from './Academiacard.module.css';
import PropTypes from "prop-types";

function Academiacard(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1 className={styles.title}>{props.title}</h1>
            </div>
            <div className={styles.right}>
                <p className={styles.info}>{props.duration}</p>
                <br/>
                <p className={styles.info}>{props.info}</p>
            </div>
        </div>
    );
}

export default Academiacard;

Academiacard.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
}

