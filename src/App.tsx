import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { MedicalProfileProvider } from './context/MedicalProfileContext';
import { ProductProvider } from './context/ProductContext';
import GlobalStyles from './styles/GlobalStyles';

// Import pages (will create these next)
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import ConsultationPage from './pages/ConsultationPage';
import MedicalHistoryPage from './pages/MedicalHistoryPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <MedicalProfileProvider>
        <ProductProvider>
          <div className="app-container">
            <Header />
            <main className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/history" element={<MedicalHistoryPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ProductProvider>
      </MedicalProfileProvider>
    </Router>
  );
};

export default App;
