import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import KnowYourRights from './pages/KnowYourRights';
import Top100Laws from './pages/Top100Laws';
import DailyInfo from './pages/DailyInfo';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 rtl">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/know-your-rights" element={<KnowYourRights />} />
            <Route path="/top-100-laws" element={<Top100Laws />} />
            <Route path="/daily-info" element={<DailyInfo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;