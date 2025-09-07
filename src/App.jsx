import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactButton from './components/ui/ContactButton';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';

// Styles
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habitaciones" element={<Rooms />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/reservar" element={<Booking />} />
            <Route path="/nosotros" element={<About />} />
          </Routes>
        </MainContent>
        <ContactButton />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
