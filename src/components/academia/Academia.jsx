import styles from './Academia.module.css';
import Academiacard from '../academiacard/Academiacard';
import { academiaSP, academiainfo } from "../../Text.js";

function Academia() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <p className={styles.titulo}>{academiaSP.title}</p>
        </div>

        <div className={styles.cardcontainer}>
            <Academiacard
                title={academiainfo[0][0]}
                duration={academiainfo[0][1]}
                info={academiainfo[0][2]}
            />
            <Academiacard
                title={academiainfo[1][0]}
                duration={academiainfo[1][1]}
                info={academiainfo[1][2]}
            />
            <Academiacard
                title={academiainfo[2][0]}
                duration={academiainfo[2][1]}
                info={academiainfo[2][2]}
            />
            <Academiacard
                title={academiainfo[3][0]}
                duration={academiainfo[3][1]}
                info={academiainfo[3][2]}
            />
        </div>

    </div>
  );
}

export default Academia;
