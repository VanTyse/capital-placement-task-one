import { CheckboxPropsType } from "../../@types";
import { CheckIcon } from "../../assets/svgs";
import { useState, useEffect } from "react";

export default function ({ checked, onChange }: CheckboxPropsType) {
  const [_checked, setChecked] = useState(checked || false);

  useEffect(() => {
    onChange(_checked);
  }, [_checked]);

  const handleClick = () => setChecked((checked) => !checked);
  return (
    <div
      className={`w-5 h-5 rounded-md  flex justify-center items-center cursor-pointer ${
        _checked ? "bg-primary-green" : "bg-[white] border"
      }`}
      onClick={handleClick}
    >
      {_checked && <CheckIcon color="white" />}
    </div>
  );
}
