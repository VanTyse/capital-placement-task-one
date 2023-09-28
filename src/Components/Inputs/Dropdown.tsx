import {
  DropdownPropTypes,
  OptionPropsType,
  QuestionTypes,
} from "../../@types";
import { useState, useEffect } from "react";
import { CaretDownIcon } from "../../assets/svgs";

const QuestionTypesDropdown = ({
  value,
  onChange,
  options,
}: DropdownPropTypes<QuestionTypes>) => {
  const [_value, setValue] = useState(value);
  const [show, setShow] = useState(false);

  useEffect(() => {
    onChange(_value);
    setShow(false);
  }, [_value]);

  useEffect(() => {
    const closeDropdownListener = () => {
      setShow(false);
    };

    window.removeEventListener("click", closeDropdownListener);

    return () => {
      window.removeEventListener("click", closeDropdownListener);
    };
  }, []);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <div
        onClick={() => setShow((x) => !x)}
        className={`border border-[black] px-3 rounded-md text-[#979797] flex justify-between items-center cursor-pointer`}
      >
        <div className="w-full h-14 flex items-center text-xl">{_value}</div>
        <CaretDownIcon />
      </div>
      <div
        className={`shadow-dropdown--options absolute top-10 transition duration-1000 rounded-md ${
          show ? "max-h-[1000px] h-80 " : "max-h-0"
        } overflow-y-auto w-full bg-[white] z-20`}
      >
        {options.map((option, index) => {
          return (
            <Option
              key={index}
              selected={_value}
              value={option}
              onSelect={(value) => setValue(value)}
            />
          );
        })}
      </div>
    </div>
  );
};

const Option = ({
  value,
  onSelect,
  selected,
}: OptionPropsType<QuestionTypes>) => {
  const handleClick = () => {
    onSelect(value);
  };
  return (
    <div
      className={`p-3 ${
        selected === value && "!bg-primary-purple"
      } cursor-pointer hover:bg-[#f4f4f4]`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export const NormalDropdown = ({
  value,
  onChange,
  options,
}: DropdownPropTypes<string>) => {
  const [_value, setValue] = useState(value);
  const [show, setShow] = useState(false);

  useEffect(() => {
    onChange(_value);
    setShow(false);
  }, [_value]);

  useEffect(() => {
    const closeDropdownListener = () => {
      setShow(false);
    };

    window.removeEventListener("click", closeDropdownListener);

    return () => {
      window.removeEventListener("click", closeDropdownListener);
    };
  }, []);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <div
        onClick={() => setShow((x) => !x)}
        className={`border border-[black] px-3 rounded-md text-[#979797] flex justify-between items-center cursor-pointer`}
      >
        <div className="w-full h-14 flex items-center text-xl">{_value}</div>
        <CaretDownIcon />
      </div>
      <div
        className={`shadow-dropdown--options absolute top-10 transition duration-1000 rounded-md ${
          show ? "max-h-[1000px] h-80 " : "max-h-0"
        } overflow-y-auto w-full bg-[white] z-20`}
      >
        {options.map((option, index) => {
          return (
            <NormalOption
              key={index}
              selected={_value}
              value={option}
              onSelect={(value) => setValue(value)}
            />
          );
        })}
      </div>
    </div>
  );
};

const NormalOption = ({
  value,
  onSelect,
  selected,
}: OptionPropsType<string>) => {
  const handleClick = () => {
    onSelect(value);
  };
  return (
    <div
      className={`p-3 ${
        selected === value && "!bg-primary-purple"
      } cursor-pointer hover:bg-[#f4f4f4]`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default QuestionTypesDropdown;
