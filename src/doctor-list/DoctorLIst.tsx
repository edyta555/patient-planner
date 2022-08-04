//import styles from "./doctor-list.module.scss";
import { DoctorTile } from "./doctor-tile/DoctorTile";

export const DoctorList = ({ doctorsData }: { doctorsData: any[] }) => {
  console.log("doctorsData", doctorsData);
  return (
    <div>
      {doctorsData.map((doctorData, index) => (
        <DoctorTile key={doctorData.id} doctorData={doctorData} />
      ))}
    </div>
  );
};
