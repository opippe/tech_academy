import React, { useState } from "react";
import './Aulas.css';

function Aulas() {
    const [aulas, setAulas] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [pdfFile, setPdfFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (pdfFile) {
            const newAula = { title, description, pdfFile };
            setAulas([...aulas, newAula]);

            setTitle("");
            setDescription("");
            setPdfFile(null);
        } else {
            alert("Por favor, envie um arquivo PDF.");
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setPdfFile(file);
        } else {
            alert("Somente arquivos PDF são permitidos.");
            setPdfFile(null);
        }
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
                <label>
                    Upload do PDF
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <button className="botao-enviar" type="submit">Enviar</button>
            </form>

            <h2>Aulas enviadas</h2>
            {aulas.length === 0 ? (
                <p>Você ainda não enviou nenhuma aula.</p>
            ) : (
                <div className="lista-aulas">
                    {aulas.map((aula, index) => (
                        <div key={index} className="item-aula">
                            <h3>{aula.title}</h3>
                            <p>{aula.description}</p>
                            {aula.pdfFile && (
                                <a
                                    href={URL.createObjectURL(aula.pdfFile)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pdf-link"
                                >
                                    Baixar PDF
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Aulas;