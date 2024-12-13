import { useState } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import Login from "./pages/Login";

function App() {
  return (
      <main className='w-full min-h-screen bg-[#f3f4f6] '>
      <Routes>
        <Route element={<Layout />}>
        
        </Route>
      </Routes>
    </main>
  );
};

export default App;
