import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Pages/Authentication/signup';
import Login from './Pages/Authentication/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
