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

  const checkCity = (doctorData: doctorDataType, enteredCity: string) => {
    if (enteredCity == "") {
      return doctorData;
    } else {
      const cityForDoctor = doctorData.adress.split(", ")[1].toLowerCase();
      return enteredCity.toLowerCase() === cityForDoctor ? doctorData : null;
    }
  };

  const checkSpecialization = (
    doctorData: doctorDataType,
    enteredSpecializations: string
  ) => {
    let acceptRecord = true;
    if (enteredSpecializations !== "") {
      const enteredSpecializationsList = enteredSpecializations.split(" ");
      enteredSpecializationsList.forEach((spec) => {
        if (!doctorData.specializations.includes(spec.trim().toLowerCase())) {
          acceptRecord = false;
          return;
        }
      });
    }
    return acceptRecord ? doctorData : null;
  };

  const filtersDoctorData = (city: string, specializations: string) => {
    setDoctorsData(
      doctorsDataFromFile.filter((doctorData) => {
        return (
          checkCity(doctorData, city) &&
          checkSpecialization(doctorData, specializations)
        );
      })
    );
  };

  useEffect(() => {
    setDoctorsData(doctorsDataFromFile);
  }, []);

  return (
    <div className={styles.App}>
      <FilterDoctor onFilter={filtersDoctorData} />
      <DoctorList doctorsData={doctorsData} />
    </div>
  );
}

export default App;
