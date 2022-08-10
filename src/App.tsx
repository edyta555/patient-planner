import { useState, useEffect } from "react";
import FilterDoctor from "./filter-doctor/FilterDoctor";
import { DoctorList } from "./doctor-list/DoctorLIst";
import doctorsDataFromFile from "./data/doctors.json";

import styles from "./app.module.scss";

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

  useEffect(() => {
    setDoctorsData(doctorsDataFromFile);
  }, []);

  return (
    <div className={styles.App}>
      <FilterDoctor />
      <DoctorList doctorsData={doctorsData} />
    </div>
  );
}

export default App;
