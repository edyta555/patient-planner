import { useState, useEffect } from "react";

import styles from "./app.module.scss";

function App() {
  const [doctorsData, setDoctorsData] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/doctors");
        const listItems = await response.json();
        console.log(listItems);
        setDoctorsData(listItems);
      } catch (err) {
        setDoctorsData([]);
        console.log(err);
      }
    };

    (() => fetchItems())();
    console.log("doctorsData,", doctorsData);
  }, []);

  return <div className={styles.App}></div>;
}

export default App;
