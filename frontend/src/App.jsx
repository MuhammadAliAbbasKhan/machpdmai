import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
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

import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import ResourcesPage from './pages/ResourcesPage';

import DefensePage from './pages/DefensePage';
import TiresPage from './pages/TiresPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';

import BusesPage from './pages/BusesPage';
import ConcretePage from './pages/ConcretePage';
import ConstructionPage from './pages/ConstructionPage';
import HeavyTrucksPage from './pages/HeavyTrucksPage';
import MediumTrucksPage from './pages/MediumTrucksPage';
import MiningPage from './pages/MiningPage';

import FeaturesPage from './pages/FeaturesPage';
import FleetDashboardsPage from './pages/FleetDashboardsPage';
import MaintenanceOptimizationPage from './pages/MaintenanceOptimizationPage';
import DataHubPage from './pages/DataHubPage';
import RemoteDiagnosticsPage from './pages/RemoteDiagnosticsPage';
import RiskExplorerPage from './pages/RiskExplorerPage';
import SensorInsightsPage from './pages/SensorInsightsPage';
import WarrantyPage from './pages/WarrantyPage';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative">
            {/* Header */}
            <Header />

            {/* Main Content Viewports */}
            <main className="flex-grow w-full">
              <Routes>
                {/* Public Landing Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/platform" element={<PlatformPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/cases" element={<CasesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />

                {/* Footer Subpages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/federal" element={<FederalPage />} />
                <Route path="/resources/ebooks" element={<EbooksPage />} />
                <Route path="/resources/videos" element={<VideosPage />} />
                <Route path="/resources/webinars" element={<WebinarsPage />} />

                {/* Main Header Categories */}
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/features" element={<FeaturesPage />} />

                <Route path="/industries/buses" element={<BusesPage />} />
                <Route path="/industries/concrete" element={<ConcretePage />} />
                <Route path="/industries/construction" element={<ConstructionPage />} />
                <Route path="/industries/heavy-trucks" element={<HeavyTrucksPage />} />
                <Route path="/industries/medium-trucks" element={<MediumTrucksPage />} />
                <Route path="/industries/mining" element={<MiningPage />} />

                {/* 🔒 PROTECTED PREMIUM SUBSCRIBER ROUTES */}
                <Route
                  path="/telemetry"
                  element={
                    <ProtectedRoute>
                      <TelemetryPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/paid-services"
                  element={
                    <ProtectedRoute>
                      <PaidServicesPage />
                    </ProtectedRoute>
                  }
                />

                {/* Protected Product Modules */}
                <Route
                  path="/products/defense"
                  element={
                    <ProtectedRoute>
                      <DefensePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/products/tires"
                  element={
                    <ProtectedRoute>
                      <TiresPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/products/custom-software"
                  element={
                    <ProtectedRoute>
                      <CustomSoftwarePage />
                    </ProtectedRoute>
                  }
                />

                {/* Protected Feature Modules */}
                <Route
                  path="/features/dashboards"
                  element={
                    <ProtectedRoute>
                      <FleetDashboardsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/features/maintenance-optimization"
                  element={
                    <ProtectedRoute>
                      <MaintenanceOptimizationPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/features/data-hub"
                  element={
                    <ProtectedRoute>
                      <DataHubPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/features/remote-diagnostics"
                  element={
                    <ProtectedRoute>
                      <RemoteDiagnosticsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/features/risk-explorer"
                  element={
                    <ProtectedRoute>
                      <RiskExplorerPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/features/sensor-insights"
                  element={
                    <ProtectedRoute>
                      <SensorInsightsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/features/warranty"
                  element={
                    <ProtectedRoute>
                      <WarrantyPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>

            {/* Bounded Modals */}
            <AuthModal />
            <CheckoutModal />
            <DemoModal />
            <QuizModal />

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ToastProvider>
  );
}
