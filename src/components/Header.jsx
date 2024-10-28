import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();

    const handleSair = () => {
        props.setUserRole("")
        props.setIsAuth(false)
        navigate("/tech_academy")
    }

    const renderMenuItems = () => {
        if (props.userRole === "Professor") {
            return (
                <>
                    <li><Link to="/aulas">Aulas</Link></li>
                    <li><Link to="/conteudos">Conteúdos</Link></li>
                    <li><Link to="/avaliacoes">Avaliações</Link></li>
                </>
            );
        } else if (props.userRole === "Aluno") {
            return (
                <>
                    <li><Link to="/minhas-aulas">Minhas Aulas</Link></li>
                    <li><Link to="/materiais">Materiais</Link></li>
                    <li><Link to="/resultados">Resultados</Link></li>
                </>
            );
        } else {
            return (
                <>
                    <li><Link to="/tech_academy">A Tech Academy</Link></li>
                    <li><Link to="/bacharelado">Bacharelado</Link></li>
                    <li><Link to="/tecnologo">Tecnólogo</Link></li>
                    <li><Link to="/pos-graduacao">Pós-graduação</Link></li>
                </>
            );
        }
    };

    return (
        <header>
            <div className="logo">
                <Link id="title" to="/tech_academy"><h1 id="title">tech academy</h1></Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={`links ${isMenuOpen ? "open" : ""}`}>
                <ul className="navigation">
                    {renderMenuItems()}
                </ul>

                {props.isAuth ? (
                    <div className="login">
                        <button id="botao" className="botao-sair" onClick={() => handleSair()}>Sair</button>
                    </div>
                ) : (
                    <div className="login">
                        <button id="botao" className="botao-cadastro" onClick={() => props.setIsCadastroOpen(true)}>Cadastre-se</button>
                        <button id="botao" className="botao-entrar" onClick={() => props.setIsLoginOpen(true)}>Entrar</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;