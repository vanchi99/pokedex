import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

let root = document.getElementById("app");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
