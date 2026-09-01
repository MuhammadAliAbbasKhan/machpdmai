import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CheckoutModal from './components/CheckoutModal';
import DemoModal from './components/DemoModal';
import QuizModal from './components/QuizModal';

import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PlatformPage from './pages/PlatformPage';
import TelemetryPage from './pages/TelemetryPage';
import QuizPage from './pages/QuizPage';
import PricingPage from './pages/PricingPage';
import PaidServicesPage from './pages/PaidServicesPage';
import CasesPage from './pages/CasesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import PartnersPage from './pages/PartnersPage';
import SecurityPage from './pages/SecurityPage';
import CareersPage from './pages/CareersPage';
import FederalPage from './pages/FederalPage';
import EbooksPage from './pages/EbooksPage';
import VideosPage from './pages/VideosPage';
import WebinarsPage from './pages/WebinarsPage';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-[#07090E] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative">
            {/* Floating Fixed Header */}
            <Header />

            {/* CRITICAL MANDATORY RULE: Fixed Header Spacer (85px) to guarantee 0% content overlap */}
            <div style={{ height: '85px' }} />

            {/* Main Content Viewports */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/platform" element={<PlatformPage />} />
                <Route path="/telemetry" element={<TelemetryPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/paid-services" element={<PaidServicesPage />} />
                <Route path="/cases" element={<CasesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />

                {/* Replica Footer Subpages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/federal" element={<FederalPage />} />
                <Route path="/resources/ebooks" element={<EbooksPage />} />
                <Route path="/resources/videos" element={<VideosPage />} />
                <Route path="/resources/webinars" element={<WebinarsPage />} />
              </Routes>
            </main>

            {/* Bounded Modals */}
            <AuthModal />
            <CheckoutModal />
            <DemoModal />
            <QuizModal />

            {/* Exact Replica Footer */}
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ToastProvider>
  );
}
