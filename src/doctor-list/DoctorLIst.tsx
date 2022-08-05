import { DoctorTile } from "./doctor-tile/DoctorTile";

import styles from "./doctor-list.module.scss";

import { doctorDataType } from "../App";

export const DoctorList = ({
  doctorsData,
}: {
  doctorsData: doctorDataType[];
}) => {
  console.log("doctorsData", doctorsData);
  return (
    <div className={styles["doctor-list-container"]}>
      {doctorsData.map((doctorData) => (
        <DoctorTile doctorData={doctorData} />
      ))}
    </div>
  );
};
