import Nav from './components/Nav';
import './App.css';
import Header from './components/Header';
import ModSelector from './components/ModSelector';
import Results from './components/Results';
import { Route, Routes } from 'react-router-dom';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<ModSelector />}/>
        <Route path="/browse" element={<Featured />}/>
      </Routes>
    </div>
  );
}

export default App;
