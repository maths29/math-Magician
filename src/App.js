import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
