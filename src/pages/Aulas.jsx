import React, { useState } from "react";
import './Aulas.css'

function Aulas() {
    const [aulas, setAulas] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newAula = { title, description };
        setAulas([...aulas, newAula]);

        setTitle("");
        setDescription("");
    };

    return (
        <div className="aulas-page">
            <h1>Enviar uma aula</h1>
            <form onSubmit={handleSubmit} className="form-aula">
                <label>
                    Título da aula
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Descrição da aula
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <button className="botao-enviar" type="submit">Enviar</button>
            </form>

            <h2>Aulas enviadas</h2>

            {aulas.length === 0 ? 
                (
                    <p>Você ainda não enviou nenhuma aula.</p>
                ) : (
                    <div className="lista-aulas">
                        {aulas.map((aula, index) => (
                            <div key={index} className="item-aula">
                                <h3>{aula.title}</h3>
                                <p>{aula.description}</p>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
}

export default Aulas;