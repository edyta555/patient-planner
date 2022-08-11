import { useRef } from "react";

import { doctorDataType } from "../App";

export const FilterDoctor = ({ onFilter }: any) => {
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const specializationInputRef = useRef<HTMLInputElement | null>(null);

  const findDoctorsHandler = (event: any) => {
    event.preventDefault();
    if (!cityInputRef.current || !specializationInputRef.current) {
      console.log("error");
    } else {
      onFilter(cityInputRef.current.value, specializationInputRef.current.value);
    }
  };

  return (
    <form onSubmit={findDoctorsHandler}>
      <input type="text" placeholder="City" ref={cityInputRef} />
      <input
        type="text"
        placeholder="Specialization"
        ref={specializationInputRef}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FilterDoctor;
