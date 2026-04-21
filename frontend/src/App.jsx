import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Comment from "./pages/Comment";
import ProtectedRoute from "../guards/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/comment"
            element={
              <ProtectedRoute>
                <Comment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
