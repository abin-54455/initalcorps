import { Routes, Route, Navigate } from "react-router-dom";
import Welcomepage from './pages/Abin_pages/Welcomepage';
import DashboardPage from './pages/Abin_pages/Dashboardpage';
import ClientPage from './pages/Abin_pages/ClientPage';
import ServicePage from './pages/Abin_pages/ServicePage';
import OfferPage from './pages/Abin_pages/OfferPage';
import FundingPage from './pages/Abin_pages/FundingPage';
import SettingPage from './pages/Abin_pages/SettingPage';
import ArticlePage from './pages/Abin_pages/ArticlePage';
import ServicesPage from "./pages/sreek-pages/ServicesPage";
import ArticleDetail from "./pages/sreek-pages/ArticleDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      <Route path="/welcomepage" element={<Welcomepage />} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
      <Route path="/clientpage" element={<ClientPage />} />
      <Route path="/servicepage" element={<ServicePage />} />
      <Route path="/articlepage" element={<ArticlePage />} />
      <Route path="/offerpage" element={<OfferPage />} />
      <Route path="/fundingpage" element={<FundingPage />} />
      <Route path="/settingpage" element={<SettingPage />} />
     <Route path="/*" element={<ServicesPage />} />
      <Route path="/article/:slug" element={<ArticleDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
