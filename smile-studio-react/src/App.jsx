import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;