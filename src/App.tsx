import { useState, useEffect } from "react";

import styles from "./app.module.scss";
import { DoctorList } from "./doctor-list/DoctorLIst";

function App() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/doctors");
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setDoctorsData(listItems);
        setFetchError(null);
      } catch (error: any) {
        setDoctorsData([]);
        setFetchError(error.message);
      }
    };

    (() => fetchItems())();
  }, []);

  return (
    <div className={styles.App}>
      {fetchError ? (
        <p>{fetchError}</p>
      ) : (
        <DoctorList doctorsData={doctorsData} />
      )}
    </div>
  );
}

export default App;
