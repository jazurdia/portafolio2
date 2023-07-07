import styles from './Tech.module.css'
import Techcard from '../Techcard/Techcard'

const frontend = [
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "CSS"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "HTML"],
]

function Tech() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerleft}>
                    <h1 className={styles.nombre}>
                        Tecnologias
                    </h1>
                </div>
                <div className={styles.headerright}>
                    <p className={styles.descripcion}>
                        Estas son las tecnologías que he implementado en los proyectos que he llevado a cabo.
                    </p>
                </div>

            </div>
            <div className={styles.body}>
                <Techcard
                    title="Frontend"
                    description="Valoro los diseños sencillos, eficientes y atractivos. Me decanto por la estética minimalista y la usabilidad. El diseño es una parte fundamental de mi trabajo y lo que más me gusta hacer."
                    langs={frontend}
                    valcol="1"
                />
            </div>
        </div>
    )
}

export default Tech;
