import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

import "antd/dist/antd.css";
import { PostGuard } from "./pages/Posts/PostGuard";
import { PostDetails } from "./pages/Posts/PostDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostGuard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();