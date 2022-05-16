import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeliveryFrom from './components/orderform'

function App() {
  return (
    <Router>
      <section>
        <Routes>

        <Route path="/" element={<DeliveryFrom />} />
          
        </Routes>
      </section>
    </Router>
  );
}

export default App;
