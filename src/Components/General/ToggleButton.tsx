import { TogglePropsType } from "../../@types";
import { useState, useEffect } from "react";

export default function ({ value, onChange }: TogglePropsType) {
  const [_value, setValue] = useState(value || false);

  useEffect(() => {
    onChange(_value);
  }, [_value]);
  return (
    <div
      className={`w-[60px] h-[30px] border border-[#ccc] rounded-full relative cursor-pointer ${
        _value ? "bg-primary-green" : ""
      }`}
      onClick={() => setValue((value) => !value)}
    >
      <div
        className={`w-[24px] h-[24px]  rounded-full absolute top-1/2 -translate-y-1/2 
         ${_value ? "right-1 bg-[white]" : "left-1 bg-[#ccc]"} `} //here I had to decide that it is more intuitive for an active toggle button to be on the right not left
      ></div>
    </div>
  );
}
