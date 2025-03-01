import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import Home from "./page/HomePage";
import './assets/fontAwesome';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
