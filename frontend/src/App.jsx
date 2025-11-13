import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import HomePage from "./page/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
