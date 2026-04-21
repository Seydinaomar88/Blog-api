import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Comment from "./pages/Comment";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
