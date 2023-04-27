import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const UserContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
