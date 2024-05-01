import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </BrowserRouter>
);
