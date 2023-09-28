import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";
import CoverImage from "./Components/Uploads/CoverImage";
import PersonalInformation from "./Components/Uploads/PersonalInformation";
import AdditionalQuestions from "./Components/Uploads/AdditionalQuestions";
import Profile from "./Components/Uploads/Profile";
import Modal from "./Components/General/Modal";
import PersonalNotes from "./Components/General/PersonalNotes";

function App() {
  const [selectedNav, setSelectedNav] = useState<
    null | "program details" | "application form" | "workflow" | "preview"
  >("application form");

  const [hasSeenModal] = useState(() => {
    const h = localStorage.getItem("has_seen_modal");
    if (h === "true") return true;
    else return false;
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!hasSeenModal) {
      setTimeout(() => setShowModal(true), 1000);
    }
  }, [hasSeenModal]);

  useEffect(() => {
    if (showModal === false) localStorage.setItem("has_seen_modal", "true");
  }, [showModal]);

  return (
    <div className="h-[100dvh] flex">
      <Sidebar />
      <div className="w-full overflow-y-auto pt-32">
        <Header nav={selectedNav} changeNav={setSelectedNav} />

        <div className="px-12 py-20 flex flex-col gap-20">
          <CoverImage />
          <PersonalInformation />
          <Profile />
          <AdditionalQuestions />
        </div>
      </div>
      <Modal show={showModal} onChange={(value) => setShowModal(value)}>
        <PersonalNotes setShowModal={setShowModal} />
      </Modal>
      <div className="bg-[#c4c4c4] animate-pulse">
        <button
          className="fixed bottom-7 right-9 bg-primary-green text-[white] rounded-full p-3 px-6 text-xs"
          onClick={() => setShowModal(true)}
        >
          Show Personal Notes
        </button>
      </div>
    </div>
  );
}

export default App;
