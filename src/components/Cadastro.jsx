import React, { useState } from "react";
import "./Cadastro.css";

function Cadastro(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Professor");

    const handleClose = (event) => {
        if (event.target === event.currentTarget) {
            props.setIsCadastroOpen(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            username,
            password,
            role
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Usuário cadastrado com sucesso!");

        setUsername("");
        setPassword("");
        setRole("Professor");
        props.setIsCadastroOpen(false);
    };

    return (
        <>
            {props.isCadastroOpen &&
                <div id="cadastro" onClick={handleClose}>
                    <div className="cadastro-modal">
                        <button className="close-button" onClick={() => props.setIsCadastroOpen(false)}>
                            &times;
                        </button>
                        <h2>Cadastre-se</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Usuário
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Senha
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="Professor">Professor</option>
                                    <option value="Aluno">Aluno</option>
                                </select>
                            </label>
                            <button type="submit" className="cadastrar-button">
                                Cadastrar
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default Cadastro;