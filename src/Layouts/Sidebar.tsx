import { NavMenuIcon } from "../assets/svgs";
import HomeIcon from "../assets/images/home-icon.png";
import NoteIcon from "../assets/images/note-icon.png";

export default function () {
  return (
    <nav className="flex flex-col justify-between shadow-right w-[114px] items-center py-12 h-[100dvh] z-40">
      <div className="flex flex-col items-center">
        <NavMenuIcon
          width={22}
          color="black"
          className="mb-24 cursor-pointer"
        />
        <img src={HomeIcon} alt="home-icon" className="mb-12 cursor-pointer" />
        <img src={NoteIcon} alt="note-icon" className="cursor-pointer" />
      </div>
      <div className="bg-primary-blue w-12 h-12 rounded-full flex justify-center items-center text-[white]">
        NT
      </div>
    </nav>
  );
}
