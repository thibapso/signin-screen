import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SignIn } from "./screens/signin";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignIn />
  </StrictMode>
);
