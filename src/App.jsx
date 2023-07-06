import styles from './App.module.css'

import Aboutme from './components/aboutme/Aboutme'
import Tech from './components/tech/Tech'
function App() {

  return (
      <div className={styles.App}>
          <Aboutme />
          <Tech />
      </div>
  )
}

export default App
