import styles from "./doctor-title.module.scss";

export const DoctorTile = ({ doctorData }: any) => {
  const {
    firstName,
    surname,
    adress,
    phoneNumber,
    academicTitle,
    specializations,
    id,
  } = doctorData;

  const changeListToString = (list: any) => {
    return list.join(", ");
  };
  return (
    <div className={styles.tile}>
      <div className={styles["first-column"]}>
        <div className={styles["first-row"]}>
          <div className={styles["photo-container"]}>
            <img src={require(`./images/${id}.svg`)} alt={`photo of ${firstName} ${surname}`} />
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
      <div className={styles["second-column"]}>
        <h3>miejsce na kalendarz</h3>
      </div>
    </div>
  );
};
