import React, { useState } from "react";
import "./Login.css";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClose = (event) => {
        if (event.target === event.currentTarget) {
            props.setIsLoginOpen(false);
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();

        const savedUserData = JSON.parse(localStorage.getItem("userData"));

        if (savedUserData && savedUserData.username === username && savedUserData.password === password) {
            setError("");
            props.setIsAuth(true);
            props.setUserRole(savedUserData.role);
            props.setIsLoginOpen(false);
        } else {
            setError("Usuário ou senha inválidos.");
        }
    };

    return (
        <>
            {props.isLoginOpen && 
                <div id="login" onClick={handleClose}>
                    <div className="login-modal">
                        <button className="close-button" onClick={() => props.setIsLoginOpen(false)}>
                            &times;
                        </button>
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>
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
                            {error && <p className="error-message">{error}</p>}
                            <button type="submit" className="login-button">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default Login;