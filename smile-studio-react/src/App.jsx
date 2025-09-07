import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage'; 
import ServicesPage from './pages/ServicesPage'; 
import DoctorsPage from './pages/DoctorsPage';
// A placeholder for the services page we will create soon


// The AppLayout component will contain our shared UI (like the sidebar)
function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      {isSidebarOpen && <Sidebar />}
      {/* The Outlet component renders the current page (e.g., HomePage) */}
      <Outlet context={{ toggleSidebar }} />
    </div>
  );
}

// The main App component now only handles routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          {/* Add routes for Reviews and Contact later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;