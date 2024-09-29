import React from 'react';
import './App.css'; // Ensure this is correct
import Login from  './Login.jsx';
import LobbyBrowser from './Game/lobbyBrowser.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/lobby-browser" element={<LobbyBrowser/>}/>
      </Routes>
    </Router>
  );
}

export default App;

