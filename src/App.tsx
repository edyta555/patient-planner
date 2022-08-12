import { useState, useEffect } from "react";

import styles from "./app.module.scss";
import { DoctorList } from "./doctor-list/DoctorLIst";

export type doctorDataType = {
  firstName: string;
  surname: string;
  adress: string;
  phoneNumber: number;
  academicTitle: string;
  specializations: string[];
  id: number;
};

function App() {
  const [doctorsData, setDoctorsData] = useState<doctorDataType[]>([]);
  const [fetchError, setFetchError] = useState(null);
  const backendURL = 'http://localhost:8000/';
  const endpointURL = 'doctors/'

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${backendURL}${endpointURL}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setDoctorsData(listItems);
        setFetchError(null);
      } catch (error: any) {
        setDoctorsData([]);
        setFetchError(error.message);
      }
    };

    fetchItems();
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
