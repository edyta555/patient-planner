import { DoctorTile } from "./doctor-tile/DoctorTile";

import styles from "./doctor-list.module.scss";

export const DoctorList = ({ doctorsData }: { doctorsData: any[] }) => {
  console.log("doctorsData", doctorsData);
  return (
    <div className={styles["doctor-list-container"]}>
      {doctorsData.map((doctorData) => (
        <DoctorTile key={doctorData.id} doctorData={doctorData} />
      ))}
    </div>
  );
};
