import styles from './Tech.module.css'

import Techcard from './techcard/Techcard'
function Tech() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerleft}>
                    <p className={styles.nombre}>
                        Tecno
                    </p>
                    <p className={styles.nombre}>
                        logías
                    </p>
                </div>
                <div className={styles.headerright}>
                    <p className={styles.descripcion}>
                        Estas son las tecnologías que he implementado en los proyectos que he llevado a cabo.
                    </p>
                </div>

            </div>

            <div className={styles.body}>

            </div>
        </div>
    )
}

export default Tech;
