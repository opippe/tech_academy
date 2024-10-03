import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./Body.css";

// Import required modules
import { Navigation } from 'swiper/modules';
import Card from './Card';

export default function Slider() {
    const data = [
        {
            title: "Engenharia de Software",
            category: "Bacharelado | Presencial",
            description: "O trabalho desenvolvido pelo Engenheiro de Software tem como foco a melhoria da produtividade de diferentes áreas do mercado de trabalho, do ensino, assim como do lazer."
        },
        {
            title: "Sistemas de Informação",
            category: "Bacharelado | Presencial",
            description: "O curso capacita o aluno a planejar, desenvolver e gerenciar sistemas de informação, visando atender às necessidades de organizações e empresas."
        },
        {
            title: "Análise e Desenvolvimento de Sistemas",
            category: "Tecnólogo | Presencial",
            description: "O tecnólogo em Análise e Desenvolvimento de Sistemas é preparado para atuar no desenvolvimento e manutenção de sistemas de software, aplicando metodologias e práticas ágeis."
        },
    ];

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {data.map((course, index) => (
                <SwiperSlide key={index}>
                    <Card 
                        title={course.title}
                        category={course.category}
                        description={course.description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
