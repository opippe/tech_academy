import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Aulas from './pages/Aulas';

function App() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <div id='page'>
        <Cadastro isCadastroOpen={isCadastroOpen} setIsCadastroOpen={setIsCadastroOpen} />
        <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} setIsAuth={setIsAuth} setUserRole={setUserRole} />
        <Header setIsCadastroOpen={setIsCadastroOpen} setIsLoginOpen={setIsLoginOpen} isAuth={isAuth} setIsAuth={setIsAuth} userRole={userRole} setUserRole={setUserRole} />

        <Routes>
          <Route path="/tech_academy" element={<Body />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/bacharelado" element={<div>Bacharelado Page</div>} />
          <Route path="/tecnologo" element={<div>Tecnólogo Page</div>} />
          <Route path="/pos-graduacao" element={<div>Pós-graduação Page</div>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;