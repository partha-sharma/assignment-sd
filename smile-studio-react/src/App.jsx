import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  // 2. Add state: `isSidebarOpen` will be true or false.
  //    `setIsSidebarOpen` is the function we use to change it.
  //    It starts as `true` (visible).
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // 1. Create the function that will be passed down
  const toggleSidebar = () => {
    // This flips the current value: true becomes false, false becomes true
    setIsSidebarOpen(!isSidebarOpen); 
  };
  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      {/* 3. Conditionally render the Sidebar based on the state */}
      {isSidebarOpen && <Sidebar />} 
      
      {/* 2. Pass the function as a prop to MainContent */}
      <MainContent toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;