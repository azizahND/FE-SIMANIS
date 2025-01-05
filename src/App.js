import gambar from './logo.svg';
import './css/landing.css';  // Mengimpor CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'preline/dist/preline.js';
import Landing from './pages/landingPage';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        
        </header>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
