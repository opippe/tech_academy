import React, { useState } from "react";
import "./Header.css";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderMenuItems = () => {
        if (props.userRole === "Professor") {
            return (
                <>
                    <li><a href="">Aulas</a></li>
                    <li><a href="">Conteúdos</a></li>
                    <li><a href="">Avaliações</a></li>
                </>
            );
        } else if (props.userRole === "Aluno") {
            return (
                <>
                    <li><a href="">Minhas Aulas</a></li>
                    <li><a href="">Materiais</a></li>
                    <li><a href="">Resultados</a></li>
                </>
            );
        } else {
            return (
                <>
                    <li><a href="">A Tech Academy</a></li>
                    <li><a href="">Bacharelado</a></li>
                    <li><a href="">Tecnólogo</a></li>
                    <li><a href="">Pós-graduação</a></li>
                </>
            );
        }
    };

    return (
        <header>
            <div className="logo">
                <h1 id="title">tech academy</h1>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={`links ${isMenuOpen ? "open" : ""}`}>
                <ul className="navigation">
                    {renderMenuItems()}
                </ul>

                {!props.isAuth &&
                    <div className="login">
                        <button id="botao" className="botao-cadastro" onClick={() => props.setIsCadastroOpen(true)}>Cadastre-se</button>
                        <button id="botao" className="botao-entrar" onClick={() => props.setIsLoginOpen(true)}>Entrar</button>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;