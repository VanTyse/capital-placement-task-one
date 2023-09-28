import { TextInputPropsType } from "../../@types";
import { useState, useEffect } from "react";

export default function ({ value, onChange }: TextInputPropsType) {
  const [_value, setValue] = useState(value);
  useEffect(() => {
    onChange(_value);
  }, [_value]);

  return (
    <div className="w-full border border-[rgb(0,0,0)] rounded-md text-[#454545]">
      <input
        type="text"
        className="block w-full p-3 rounded-md h-14"
        value={_value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
