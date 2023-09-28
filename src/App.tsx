import "./App.css";
import { useState } from "react";
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";
import CoverImage from "./Components/Uploads/CoverImage";
import PersonalInformation from "./Components/Uploads/PersonalInformation";
import AdditionalQuestions from "./Components/Uploads/AdditionalQuestions";
import Profile from "./Components/Uploads/Profile";

function App() {
  const [selectedNav, setSelectedNav] = useState<
    null | "program details" | "application form" | "workflow" | "preview"
  >("application form");

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
    </div>
  );
}

export default App;
