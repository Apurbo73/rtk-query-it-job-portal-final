import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addjob from "./components/AddJob/Addjob";
import Detail from "./components/Detail/Detail";
import Update from "./components/update/Update";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jobs/add" element={<Addjob />} />
        <Route path="/jobs/detail/:id" element={<Detail />} />
        <Route path="/jobs/detail/:id" element={<Detail />} />
        <Route path="/jobs/update/:id" element={<Update />} />

      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
