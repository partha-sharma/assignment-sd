import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage'; 
import ServicesPage from './pages/ServicesPage'; 
import DoctorsPage from './pages/DoctorsPage';

function ReviewsPage() {
  return <div className="p-10"><h1 className="text-4xl font-bold">Reviews Page</h1></div>;
}

function ContactPage() {
  return <div className="p-10"><h1 className="text-4xl font-bold">Contact Page</h1></div>;
}

// The AppLayout component will contain our shared UI (like the sidebar)
function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      {/* The sidebar is rendered conditionally based on state */}
      {isSidebarOpen && <Sidebar />}

      {/* This wrapper will contain the toggle button AND the page content */}
      <main className="flex-1 flex flex-col">
        {/* We moved the header with the toggle button HERE */}
        <header className="p-4 flex items-center bg-white shadow-sm">
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200">
            <i className="fa-solid fa-bars text-xl text-gray-700"></i>
          </button>
        </header>
        
        {/* The Outlet now renders the page content below the header */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
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
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;