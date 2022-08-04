export const DoctorTile = ({ doctorData }: any) => {
  const { firstName, surname, phoneNumber } = doctorData;
  return (
    <div>
      <p>{firstName}</p>
      <p>{surname}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};
