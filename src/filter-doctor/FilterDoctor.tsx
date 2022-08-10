import { useRef } from "react";

export const FilterDoctor = () => {
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const specializationInputRef = useRef<HTMLInputElement | null>(null);

  const findDoctorsHandler = (event: any) => {
    event.preventDefault();
    if (!cityInputRef.current || !specializationInputRef.current) {
      console.log("error");
    } else {
      console.log(
        cityInputRef.current.value,
        specializationInputRef.current.value
      );
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
