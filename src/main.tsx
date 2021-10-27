import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "tailwindcss/tailwind.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
