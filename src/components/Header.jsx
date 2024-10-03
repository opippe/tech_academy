import React from "react";
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="logo">
                <h1 id="title">tech academy</h1>
            </div>
            <div className="links">
                <ul className="navigation">
                    <li><i class="fa-solid fa-house"></i><a href="">A Tech Academy</a></li>
                    <li><a href="">Bacharelado</a></li>
                    <li><a href="">Tecnólogo</a></li>
                    <li><a href="">Pós-graduação</a></li>
                </ul>
                <ul className="login">
                    <li><a href="">Sou professor</a></li>
                    <li><a href="">Sou aluno</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;