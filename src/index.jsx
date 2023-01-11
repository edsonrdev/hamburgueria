import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Providers } from "./providers";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
