import styles from './App.module.css'

import Aboutme from './components/aboutme/Aboutme'
import Tech from './components/tech/Tech'
import Academia from "./components/academia/Academia.jsx";
function App() {

  return (
      <div className={styles.App}>
          <Aboutme />
          <Tech />
          <Academia />
      </div>
  )
}

export default App
