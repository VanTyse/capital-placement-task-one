import { ModalPropsType } from "../../@types";

export default function ({ children, show, onChange }: ModalPropsType) {
  return (
    <div
      className={`fixed top-0 left-0 w-[100dvw] h-[100dvh] 
      flex justify-center items-center 
      bg-modal z-50 duration-500 transition-all cursor-pointer ${
        show ? "scale-100" : "scale-0"
      }`}
      onClick={() => onChange(false)}
    >
      <div
        className="max-w-[500px] max-h-[95dvh] overflow-y-auto cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
