import React from 'react';
import { MainPage, DetailPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todos/todoId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
