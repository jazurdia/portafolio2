import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.actions}>
                <a href="/AboutMePage">Sobre mi</a>
                <a href="/TechPage">Tecnologías</a>
            </div>
        </div>
    )
}

export default Navbar;
