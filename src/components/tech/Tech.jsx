import styles from './Tech.module.css'
import Techcard from '../Techcard/Techcard'

const frontend = [
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "CSS"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "HTML"],
]

const backend = [
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "Python"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "Java"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", "C++"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", "Golang"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "PostgreSQL"],
    ["https://neon-stroopwafel-d8d70e.netlify.app/assets/sqlserver-cfa4fc80.svg", "SQL Server"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", "Django"],
    ["https://neon-stroopwafel-d8d70e.netlify.app/assets/ginlogo-6c6f34b3.svg", "Gin-Gonic"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", "Firebase"],
]

const others = [
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", "Kotlin"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", "Android"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "Git"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", "GitHub"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", "Linux"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", "NPM"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg", "Yarn"],
    ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg", "JetBrains"],
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
                    title="Front-end"
                    description="Valoro los diseños sencillos, eficientes y atractivos. Me decanto por la estética minimalista y la usabilidad. El diseño es una parte fundamental de mi trabajo y lo que más me gusta hacer."
                    langs={frontend}
                    valcol="1"
                />
                <Techcard
                    title="Back-end"
                    description="Me enfoco en desarrollar soluciones eficientes y escalables, asegurando un alto rendimiento y una gestión adecuada del lado del servidor."
                    langs={backend}
                    valcol="0"
                />
                <Techcard
                    title={"Otras tecnologías"}
                    description={"Estas son otras tecnologías que he utilizado en mis proyectos:"}
                    langs={others}
                    valcol={"1"}
                />
            </div>
        </div>
    )
}

export default Tech;
