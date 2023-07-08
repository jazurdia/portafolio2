import styles from './Tech.module.css'
import Techcard from '../Techcard/Techcard'

import { frontend, frontendSP, backend, backendSP, others, otherTechSP} from "../../Text.js";


function Tech() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerleft}>
                    <h1 className={styles.nombre}>
                        Tecnologias
                    </h1>
                </div>
            </div>
            <div className={styles.body}>
                <Techcard
                    title={frontendSP.title}
                    description={frontendSP.desc}
                    langs={frontend}
                    valcol="1"
                />
                <Techcard
                    title={backendSP.title}
                    description={backendSP.desc}
                    langs={backend}
                    valcol="0"
                />
                <Techcard
                    title={otherTechSP.title}
                    description={otherTechSP.desc}
                    langs={others}
                    valcol={"1"}
                />
            </div>
        </div>
    )
}

export default Tech;
