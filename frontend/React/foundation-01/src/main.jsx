import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Dummy from "./Dummy.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  <Dummy />,
  // </StrictMode>,
);
