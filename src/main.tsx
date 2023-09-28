import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApplicationFormDataProvider } from "./context/ApplicationFormContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationFormDataProvider>
      <App />
    </ApplicationFormDataProvider>
  </React.StrictMode>
);
