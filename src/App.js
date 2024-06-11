import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Header from './components/Header';


function App() {
return (
<Router>
  <div className="App section">
    <Header />
    <Routes>
      <Route path="/profile" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </div>
</Router>
);
}

export default App;
