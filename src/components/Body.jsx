import React from "react";
import "./Body.css"
import Slider from "./Slider.jsx";


function Body() {
    const diferenciais = [
        {
            title: "Metodologia Ativa e Projetos Reais",
            description: "Nossa metodologia é baseada em projetos reais, preparando os alunos para enfrentar os desafios do mercado com soluções práticas e inovadoras."
        },
        {
            title: "Infraestrutura de Ponta",
            description: "Laboratórios modernos e equipados com as mais recentes tecnologias para que nossos estudantes explorem o que há de mais inovador no setor de tecnologia."
        },
        {
            title: "Parcerias com Empresas de Tecnologia",
            description: "Parcerias estratégicas com grandes empresas oferecem oportunidades exclusivas de estágio, networking e colocação profissional para nossos alunos."
        },
        {
            title: "Mentoria Individualizada",
            description: "Acompanhamos o desenvolvimento de cada aluno de perto, oferecendo suporte contínuo e mentoria personalizada para garantir o sucesso de todos."
        },
        {
            title: "Foco em Soft Skills e Desenvolvimento Pessoal",
            description: "Além do conhecimento técnico, nossos cursos capacitam os alunos com habilidades de comunicação, liderança e trabalho em equipe."
        },
        {
            title: "Alto Índice de Empregabilidade",
            description: "A maioria dos nossos alunos já ingressa no mercado antes da conclusão do curso, contando com nosso apoio na colocação profissional."
        }
    ];

    return (
        <div id="body">
            <section id="section1">
                <Slider />
            </section>
            <section id="section2">
                <div className="diferenciais-container">
                    <h2 className="section-title">Diferenciais Tech Academy</h2>
                    <div className="diferenciais-grid">
                        {diferenciais.map((diferencial, index) => (
                            <div key={index} className="diferencial-item">
                                <h3>{diferencial.title}</h3>
                                <p>{diferencial.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Body;