import { HeaderType, NavType } from "../@types";
import { CaretRight } from "../assets/svgs";

export default function ({ nav, changeNav }: HeaderType) {
  return (
    <header className="pl-16 shadow-header overflow-x-hidden">
      <nav className="flex">
        <NavItem nav={nav} changeNav={changeNav} navName="program details" />
        <NavItem nav={nav} changeNav={changeNav} navName="application form" />
        <NavItem nav={nav} changeNav={changeNav} navName="workflow" />
        <NavItem nav={nav} changeNav={changeNav} navName="preview" />
      </nav>
    </header>
  );
}

const NavItem = ({ nav, changeNav, navName }: NavType) => {
  const handleClick = () => {
    changeNav(navName);
  };
  return (
    <div className={`relative w-full ${nav === navName && "z-10"}`}>
      <div
        className={`capitalize hover:bg-[#d7d7d7] ${
          nav === navName ? "!bg-primary-dark-green text-[white]" : ""
        } 
      p-10 basis-1/4 w-full flex justify-center cursor-pointer `}
        onClick={handleClick}
      >
        {navName}
      </div>

      <span className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
        {nav === navName && <CaretRight />}
      </span>
      {nav !== navName && (
        <span className="absolute top-1/2 -translate-y-1/2 z-10 h-10 w-[1px] -right-1 bg-[#c4c4c4]"></span>
      )}
    </div>
  );
};
