import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Cadastro from './components/Cadastro';
import Login from './components/Login';

function App() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userRole, setUserRole] = useState(null); // New state for user role

  return (
    <div id='page'>
      <Cadastro isCadastroOpen={isCadastroOpen} setIsCadastroOpen={setIsCadastroOpen} />
      <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} setIsAuth={setIsAuth} setUserRole={setUserRole} />
      <Header setIsCadastroOpen={setIsCadastroOpen} setIsLoginOpen={setIsLoginOpen} isAuth={isAuth} userRole={userRole} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;