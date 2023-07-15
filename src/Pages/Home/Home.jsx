import styles from "./Home.module.css";

import { StoreContext} from "storeon/react";
import { store } from "../../store/index.js";
import Page from "../index.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
function Home() {

  return (

      <StoreContext.Provider value={store}>

      <div className={styles.App}>
          <Navbar />
          <Page />
      </div>
        </StoreContext.Provider>
  )
}

export default Home



