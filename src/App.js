import Nav from './components/Nav';
import './App.css';
import Header from './components/Header';
import ModSelector from './components/ModSelector';
import Results from './components/Results';
import { Route, Routes } from 'react-router-dom';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<ModSelector />}/>
        <Route path="/browse" element={<Featured />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
