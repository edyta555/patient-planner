import { useRef } from "react";

export const FilterDoctor = ({ onFilter }: any) => {
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const specializationInputRef = useRef<HTMLInputElement | null>(null);

  const findDoctorsHandler = (event: any) => {
    event.preventDefault();
    if (!cityInputRef.current || !specializationInputRef.current) {
      console.log("problem with data download");
    } else {
      onFilter(cityInputRef.current.value, specializationInputRef.current.value);
    }
  };

  return (
    <form onSubmit={findDoctorsHandler}>
      <input type="text" placeholder="City" ref={cityInputRef} />
      <input
        type="text"
        placeholder="Specializations"
        ref={specializationInputRef}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FilterDoctor;
