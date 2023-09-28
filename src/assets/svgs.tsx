import { SVGType } from "../@types";

export const NavMenuIcon = ({ color, width, className }: SVGType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      className={className}
    >
      <rect
        x="0.768005"
        y="0.30896"
        width={width}
        height="2.92393"
        fill={color || "currentcolor"}
      />
      <rect
        x="0.768005"
        y="8.10608"
        width={width}
        height="2.92393"
        fill={color || "currentcolor"}
      />
      <rect
        x="0.768005"
        y="15.9032"
        width={width}
        height="2.92393"
        fill={color || "currentcolor"}
      />
    </svg>
  );
};

export const CaretRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="42"
      viewBox="0 0 21 42"
      fill="none"
    >
      <path d="M21 21L0 42L-2.09101e-06 0L21 21Z" fill="#00635B" />
    </svg>
  );
};

export const CheckIcon = ({ color }: SVGType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={color || "currentcolor"}
      viewBox="0 0 16 16"
    >
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
    </svg>
  );
};

export const PlusIcon = ({ width, height, color }: SVGType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "25"}
      height={height || "24"}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M2.42465 11.9094L1 11.9182L12.8925 11.8456L24.7851 11.7729"
        stroke={color || "black"}
        strokeWidth="5"
      />
      <path
        d="M12.7915 2.51804L12.7838 1.09338L12.8466 12.986L12.8466 24"
        stroke={color || "black"}
        strokeWidth="5"
      />
    </svg>
  );
};

export const CaretDownIcon = ({ color }: SVGType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
    >
      <path
        d="M0 0.172241L5.79652 0.160211L11.593 0.148181L5.80507 8.32037L0 0.172241Z"
        fill={color || "black"}
      />
    </svg>
  );
};

export const XIcon = ({ color }: SVGType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M9.55684 9.42862L8.54321 8.42749L17.0039 16.7854L25.4645 25.1434"
        stroke={color || "currentColor"}
        strokeWidth="5"
      />
      <path
        d="M23.5281 10.1184L24.53 9.10559L16.1651 17.5594L8.37704 25.3474"
        stroke={color || "currentColor"}
        strokeWidth="5"
      />
    </svg>
  );
};

export const ListIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z"
        fill="black"
      />
    </svg>
  );
};
