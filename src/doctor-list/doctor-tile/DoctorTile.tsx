import styles from "./doctor-title.module.scss";

import { doctorDataType } from "../../App";

type DoctorTileProps = {
  doctorData: doctorDataType;
};

export const DoctorTile = ({ doctorData }: DoctorTileProps) => {
  const {
    firstName,
    surname,
    adress,
    phoneNumber,
    academicTitle,
    specializations,
    id,
  } = doctorData;

  const changeListToString = (list: string[]) => {
    return list.join(", ");
  };
  return (
    <div className={styles.tile} key={id}>
      <div className={styles["doctor-info-container"]}>
        <div className={styles["first-row"]}>
          <div className={styles["photo-container"]}>
            <img
              src={require(`./images/${id}.svg`)}
              alt={`photo of ${firstName} ${surname}`}
            />
          </div>
          <div className={styles["main-info"]}>
            <h3> {`${academicTitle || "lek."} ${firstName} ${surname}`}</h3>
            <p>{changeListToString(specializations)}</p>
          </div>
        </div>
        <div className={styles["second-row"]}>
          <div className={styles["adress-container"]}>
            <p>Adres:</p>
            <span>{adress}</span>
          </div>
          <div>
            <p>Nr telefonu:</p>
            <span>{phoneNumber}</span>
          </div>
        </div>
      </div>
      <div className={styles["calendar-container"]}>
        <h3>miejsce na kalendarz</h3>
      </div>
    </div>
  );
};
