import { DoctorTile } from "./doctor-tile/DoctorTile";

import styles from "./doctor-list.module.scss";

import { doctorDataType } from "../App";

type DoctorListProps = {
  doctorsData: doctorDataType[];
};

export const DoctorList = ({ doctorsData }: DoctorListProps) => {
  return (
    <div className={styles["doctor-list-container"]}>
      {doctorsData ? (
        doctorsData.map((doctorData) => <DoctorTile doctorData={doctorData} />)
      ) : (
        <p>
          There are no doctors who meet your criteria. Please change your search
          criteria.
        </p>
      )}
    </div>
  );
};
