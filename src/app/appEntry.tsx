import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./providers/router/RouterProvider";
import { Provider } from "react-redux";
import { store } from "../shared/redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  </StrictMode>
);
